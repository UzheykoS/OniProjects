import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"
import IngredientItem from "../models/IngredientItem"
import Category from "../models/Category"
import Error from "../models/Error"
import BaseHelper from "./BaseHelper"
import { Status }  from '../models/Status'

export default class Helper extends BaseHelper {
    //INGREDIENTS SECTION
    static async getIngredients (): Promise<Array<Ingredient>> {
        const response = await this.executeGetRequest('api/ingredients');
        const result = new Array<Ingredient>();   
        response.data.forEach(element => {
            let ingredient = new Ingredient();
            ingredient.id = element.id;
            ingredient.name = element.name;
            ingredient.price = element.price;
            ingredient.supplier = element.supplier;
            ingredient.status = Status.Saved;
            result.push(ingredient)
        });
             
        return result;
    }
    
    static async saveIngredients (data) {
        const result = await this.executePostRequest('api/ingredients', data);
        return result;
    }

    static async getIngredientById (id: number): Promise<Ingredient> {
        const response = await this.executeGetRequest('api/ingredients/' + id);

        let result = new Ingredient();
        result.id = response.data.id;
        result.name = response.data.name;
        result.price = response.data.price;
        result.supplier = response.data.supplier;
        result.status = Status.Saved;
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
    static async getCategories (): Promise<Array<Category>> {
        const response = await this.executeGetRequest('api/categories');

        const result = new Array<Category>();   
        response.data.forEach(element => {
            let category = new Category();
            category.id = element.id;
            category.name = element.name;
            category.status = Status.Saved;
            result.push(category)
        });             
        return result;
    }
    
    static async saveCategories (data) {
        const result = await this.executePostRequest('api/categories', data);
        return result;
    }

    static async getCategoryById (id: number): Promise<Category> {
        const response = await this.executeGetRequest('api/categories/' + id);

        let result = new Category();
        result.id = response.data.id;
        result.name = response.data.name;
        result.status = Status.Saved;
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
    static async getRecipes (): Promise<Array<Recipe>> {
        const recipesResponse = await this.executeGetRequest('api/recipes');
        const subreciepes = await this.getSubrecipes();
        let itemsResponse = new Array<IngredientItem>();
        const result = new Array<Recipe>();   

        recipesResponse.data.forEach(r => {
            const recipe = new Recipe();
            recipe.id = r.id;
            recipe.name = r.name;
            recipe.categoryid = r.category_id;
            recipe.status = Status.Saved;
            subreciepes.filter(sr => sr.recipe_id == recipe.id).forEach(async (subRecipe) => {
                itemsResponse = await this.getIngredientItems(subRecipe.id);
                itemsResponse.forEach(i => {
                    subRecipe.ingredientItems.push(i);
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

    static async getRecipeById(id: number): Promise<Recipe> {
        const recipeResponse = await this.executeGetRequest('api/recipes/' + id);
        const subreciepes = await this.getSubrecipes();
        let itemsResponse;
        const result = new Recipe();
        result.id = recipeResponse.data.id;
        result.name = recipeResponse.data.name;
        result.categoryid = recipeResponse.data.category_id;
        result.status = Status.Saved;

        subreciepes.filter(sr => sr.recipe_id == result.id).forEach(async (subRecipe) => {
            itemsResponse = await this.getIngredientItems(subRecipe.id);
            itemsResponse.forEach(i => {
                subRecipe.ingredientItems.push(i);
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
    static async getSubrecipes (): Promise<Array<SubRecipe>> {
        const subrecipesResponse = await this.executeGetRequest('api/subrecipes');
        const result = new Array<SubRecipe>();
        subrecipesResponse.data.forEach(r => {
            let subRecipe = new SubRecipe();
            subRecipe.id = r.id;
            subRecipe.name = r.name;
            subRecipe.recipe_id = r.recipe_id;
            subRecipe.status = Status.Saved;
            result.push(subRecipe);
        });

        return result;
    }

    static async saveSubrecipes (data) {
        const result = await this.executePostRequest('api/subrecipes', data);
        return result;
    }

    static async getSubrecipeById (id: number): Promise<SubRecipe> {
        const response = await this.executeGetRequest('api/subrecipes/' + id);
        
        const result = new SubRecipe();   
        result.id = response.data.id;
        result.name = response.data.name;
        result.recipe_id = response.data.recipe_id;        
        result.status = Status.Saved;
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
    static async getIngredientItems (subrecipeId: number): Promise<Array<IngredientItem>> {
        const ingredientItemsResponse = await this.executeGetRequest(`/api/subrecipes/${subrecipeId}/items`);
        let result = new Array<IngredientItem>();
        ingredientItemsResponse.data.forEach(r => {
            let ingredientItem = new IngredientItem();
            ingredientItem.id = r.id;
            ingredientItem.ingredient_id = r.ingredient_id;
            ingredientItem.subrecipe_id = r.subrecipe_id;
            ingredientItem.quantity = r.quantity;
            ingredientItem.description = r.description;
            ingredientItem.status = Status.Saved;
            result.push(ingredientItem);
        });

        return result;
    }

    static async saveIngredientItems (subrecipeId: number, data) {
        const result = await this.executePostRequest(`/api/subrecipes/${subrecipeId}/items`, data);
        return result;
    }

    static async getIngredientItemById (subrecipeId: number, id: number) {
        const response = await this.executeGetRequest(`/api/subrecipes/${subrecipeId}/items/${id}`);

        let ingredientItem = new IngredientItem();
        ingredientItem.id = response.data.id;
        ingredientItem.ingredient_id = response.data.ingredient_id;
        ingredientItem.subrecipe_id = response.data.subrecipe_id;
        ingredientItem.quantity = response.data.quantity;
        ingredientItem.description = response.data.description;
        ingredientItem.status = Status.Saved;
        return ingredientItem;
    }

    static async deleteIngredientItem (subrecipeId: number, id: number) {
        const result = await this.executeDeleteRequest(`/api/subrecipes/${subrecipeId}/items/${id}`);
        return result;
    }

    static async putIngredientItem (subrecipeId: number, id: number, data: any) {
        const result = await this.executePutRequest(`/api/subrecipes/${subrecipeId}/items/${id}`, data);
        return result;
    }
}