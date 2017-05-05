let nextRecipeId = 1;
import SubRecipe from "./SubRecipe"

export default class Recipe {
    Id: number;
    Name: string;  
    SubRecipes: Array<SubRecipe>;

    constructor(name: string, prevIndex?: number) {
        this.Name = name;
        if (!!prevIndex) {
            nextRecipeId = ++prevIndex;
        }
        this.Id = nextRecipeId++;
        this.SubRecipes = [];
    }
}