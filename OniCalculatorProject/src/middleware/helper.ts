import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"
import Category from "../models/Category"
import Error from "../models/Error"
import BaseHelper from "./BaseHelper"

export default class Helper extends BaseHelper {
    //INGREDIENTS SECTION
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
        result.id = response.data.id;
        result.name = response.data.name;
        result.price = response.data.price;
        result.supplier = response.data.supplier;
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

    //CATEGORIES SECTION
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
    
    static async saveCategories (data) {
        const result = await this.executePostRequest('api/categories', data);
        return result;
    }

    static async getCategoryById (id: number) {
        const response = await this.executeGetRequest('api/categories/' + id);

        let result = new Category();
        result.id = response.data.id;
        result.name = response.data.name;
        return result;
    }

    static async deleteCategory (id: number) {
        const result = await this.executeDeleteRequest('api/categories/' + id);
        return result;
    }

    static async putCategory (id: number, data: any) {
        const result = await this.executePutRequest('api/categories/' + id, data);
        return result;
    }

    //RECIPES SECTION
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
                    subRecipe.ingredientstoqty[i.ingredient_id] = { qty: i.quantity, desc: i.description}
                });                
                recipe.subrecipes.push(subRecipe);
            });
            result.push(recipe);
        });
             
        return result;
    }

    static async saveRecipes (data) {        
        const result = await this.executePostRequest('api/recipes', data);
        return result;
    }

    static async getRecipeById(id: number) {
        const recipeResponse = await this.executeGetRequest('api/recipes/' + id);
        const subrecipesResponse = await this.executeGetRequest('api/subrecipes');
        let itemsResponse;

        let result = new Recipe();
        result.id = recipeResponse.data.id;
        result.name = recipeResponse.data.name;
        result.categoryid = recipeResponse.data.category_id;

        subrecipesResponse.data.filter(sr => sr.recipe_id == result.id).forEach(async (sr) => {
            let subRecipe = new SubRecipe();
            subRecipe.id = sr.id;
            subRecipe.name = sr.name;
            itemsResponse = await this.executeGetRequest(`/api/subrecipes/${sr.id}/items`);
            itemsResponse.data.filter(i => i.subrecipe_id == subRecipe.id).forEach(i => {
                subRecipe.ingredientstoqty[i.ingredient_id] = { qty: i.quantity, desc: i.description }
            });
            result.subrecipes.push(subRecipe);
        });

        return result;
    }

    static async deleteRecipe (id: number) {
        const result = await this.executeDeleteRequest('api/recipes/' + id);
        return result;
    }

    static async putRecipe (id: number, data: any) {
        const result = await this.executePutRequest('api/recipes/' + id, data);
        return result;
    }

    //SUBRECIPES SECTION
    static async getSubrecipes () {
        // const recipesResponse = await this.executeGetRequest('api/recipes');
        // const subrecipesResponse = await this.executeGetRequest('api/subrecipes');
        // let itemsResponse;
        // let result = new Array<Recipe>();   
        // recipesResponse.data.forEach(r => {
        //     let recipe = new Recipe();
        //     recipe.id = r.id;
        //     recipe.name = r.name;
        //     recipe.categoryid = r.category_id;
        //     subrecipesResponse.data.filter(sr => sr.recipe_id == recipe.id).forEach(async (sr) => {
        //         let subRecipe = new SubRecipe();
        //         subRecipe.id = sr.id;
        //         subRecipe.name = sr.name;
        //         itemsResponse = await this.executeGetRequest(`/api/subrecipes/${sr.id}/items`);
        //         itemsResponse.data.filter(i => i.subrecipe_id == subRecipe.id).forEach(i => {
        //             subRecipe.ingredientstoqty[i.ingredient_id] = { Qty: i.quantity, Desc: i.description}
        //         });                
        //         recipe.subrecipes.push(subRecipe);
        //     });
        //     result.push(recipe);
        // });
             
        // return result;
    }

    static async saveSubrecipes (data) {
        const result = await this.executePostRequest('api/subrecipes', data);
        return result;
    }

    static async getSubrecipeById (id: number) {
        const response = await this.executeGetRequest('api/subrecipes/' + id);
        
        let result = new SubRecipe();   
        result.id = response.data.id;
        result.name = response.data.name;
        let itemsResponse = await this.executeGetRequest(`/api/subrecipes/${result.id}/items`);
        itemsResponse.data.filter(i => i.subrecipe_id == result.id).forEach(i => {
            result.ingredientstoqty[i.ingredient_id] = { qty: i.quantity, desc: i.description }
        });             
        return result;
    }

    static async deleteSubrecipe (id: number) {
        const result = await this.executeDeleteRequest('api/subrecipes/' + id);
        return result;
    }

    static async putSubrecipe (id: number, data: any) {
        const result = await this.executePutRequest('api/subrecipes/' + id, data);
        return result;
    }

    // INGREDIENT ITEMS SECTION
}