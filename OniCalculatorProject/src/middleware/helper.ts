import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"
import Category from "../models/Category"

import Error from "../models/Error"
import axios from 'axios';
require("babel-polyfill");

export default class Helper {
    static async executeGetRequest (url: string) {
        let result = await axios.get(url);
        return result;
    }

    static async executePostRequest (url: string, data: string) {
        let result = await axios.post(url, data);
        return result;

        // let xmlhttp = new XMLHttpRequest();
        // xmlhttp.open("POST", url);
        // xmlhttp.setRequestHeader("Content-Type", "application/json");
        // xmlhttp.send(JSON.stringify(data));

        // xmlhttp.onreadystatechange = () => {
        //     if (xmlhttp.readyState != 4) {
        //         return;
        //     }

        //     if (xmlhttp.status != 200) {
        //         console.log(xmlhttp.status + ': ' + xmlhttp.statusText);
        //     } else {
        //         console.log(xmlhttp.responseText);
        //     }
        // }
    }

    static async executeDeleteRequest (url: string) {
        let result = await axios.delete(url);
        return result;
    }

    static async executePutRequest (url: string, data: any) {
        let result = await axios.put(url, data);
        return result;
    }

    static async getIngredients () {
        const response = await this.executeGetRequest('api/ingredients');
        let result = new Array<Ingredient>();   
        response.data.forEach(element => {
            let ingredient = new Ingredient();
            ingredient.id = element.id;
            ingredient.name = element.name;
            ingredient.price = element.price;
            ingredient.supplier = element.supplier;
            result.push(ingredient)
        });
             
        return result;
    }
    
    static async saveIngredients (data) {
        const result = await this.executePostRequest('api/ingredients', data);
        return result;
    }

    static async getIngredientById (id: number) {
        const response = await this.executeGetRequest('api/ingredients/' + id);
        let result = new Ingredient();   
        response.data.forEach(element => {
            result.id = element.id;
            result.name = element.name;
            result.price = element.price;
            result.supplier = element.supplier;
        });
             
        return result;
    }

    static async deleteIngredient (id: number) {
        const result = await this.executeDeleteRequest('api/ingredients/' + id);
        return result;
    }

    static async putIngredient (id: number, data: any) {
        const result = await this.executePutRequest('api/ingredients/' + id, data);
        return result;
    }

    static async getCategories () {
        const response = await this.executeGetRequest('api/categories');
        let result = new Array<Category>();   
        response.data.forEach(element => {
            let category = new Category();
            category.id = element.id;
            category.name = element.name;
            result.push(category)
        });
             
        return result;
    }

    static async getRecipes () {
        const recipesResponse = await this.executeGetRequest('api/recipes');
        const subrecipesResponse = await this.executeGetRequest('api/subrecipes');
        let itemsResponse;
        let result = new Array<Recipe>();   
        recipesResponse.data.forEach(r => {
            let recipe = new Recipe();
            recipe.id = r.id;
            recipe.name = r.name;
            recipe.categoryid = r.category_id;
            subrecipesResponse.data.filter(sr => sr.recipe_id == recipe.id).forEach(async (sr) => {
                let subRecipe = new SubRecipe();
                subRecipe.id = sr.id;
                subRecipe.name = sr.name;
                itemsResponse = await this.executeGetRequest(`/api/subrecipes/${sr.id}/items`);
                itemsResponse.data.filter(i => i.subrecipe_id == subRecipe.id).forEach(i => {
                    subRecipe.ingredientstoqty[i.ingredient_id] = { Qty: i.quantity, Desc: i.description}
                });                
                recipe.subrecipes.push(subRecipe);
            });
            result.push(recipe);
        });
             
        return result;
    }
}