let nextRecipeId = 1;
import SubRecipe from "./SubRecipe"

export default class Recipe {
    Id: number;
    Name: string;  
    SubRecipes: Array<SubRecipe>;

    constructor(name: string) {
        this.Name = name;
        this.Id = nextRecipeId++;
        this.SubRecipes = [];
    }
}