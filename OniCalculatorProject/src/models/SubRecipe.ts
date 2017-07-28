import Ingredient from "./Ingredient"
import IngredientItem from "./IngredientItem"
import { Status }  from './Status'

export default class SubRecipe {
    id: number;
    name: string;  
    recipe_id: number;
    ingredientItems: Array<IngredientItem>;
    status: Status;

    constructor() {
        this.ingredientItems = new Array<IngredientItem>();
    }
}