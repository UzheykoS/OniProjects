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
        let result = await axios.post(url, JSON.stringify(data));
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

    static async getIngredients () {
        const response = await this.executeGetRequest('api/ingredients');
        let result = new Array<Ingredient>();   
        response.data.forEach(element => {
            let ingredient = new Ingredient();
            ingredient.Id = element.id;
            ingredient.Name = element.name;
            ingredient.Price = element.price;
            ingredient.Supplier = element.supplier;
            result.push(ingredient)
        });
             
        return result;
    }

    static async getIngredientById (id: number) {
        const response = await this.executeGetRequest('api/ingredients/' + id);
        let result = new Ingredient();   
        response.data.forEach(element => {
            result.Id = element.id;
            result.Name = element.name;
            result.Price = element.price;
            result.Supplier = element.supplier;
        });
             
        return result;
    }

    static async getCategories () {
        const response = await this.executeGetRequest('api/categories');
        let result = new Array<Category>();   
        response.data.forEach(element => {
            let category = new Category();
            category.Id = element.id;
            category.Name = element.name;
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
            recipe.Id = r.id;
            recipe.Name = r.name;
            recipe.CategoryId = r.category_id;
            subrecipesResponse.data.filter(sr => sr.recipe_id == recipe.Id).forEach(async (sr) => {
                let subRecipe = new SubRecipe();
                subRecipe.Id = sr.id;
                subRecipe.Name = sr.name;
                itemsResponse = await this.executeGetRequest(`/api/subrecipes/${sr.id}/items`);
                itemsResponse.data.filter(i => i.subrecipe_id == subRecipe.Id).forEach(i => {
                    subRecipe.IngredientsToQty[i.ingredient_id] = { Qty: i.quantity, Desc: i.description}
                });                
                recipe.SubRecipes.push(subRecipe);
            });
            result.push(recipe);
        });
             
        return result;
    }
}