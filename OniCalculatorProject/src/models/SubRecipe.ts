let nextSubRecipeId = 1;
// import Ingredient from "./Ingredient"

export default class SubRecipe {
    Id: number;
    Name: string;  
    IngredientsToQty: { [key: string]: { Qty: number, Desc?: string }; };

    constructor(name: string, prevIndex?: number) {
        this.Name = name;
        this.Id = nextSubRecipeId++;
        if (!!prevIndex) {
            nextSubRecipeId = ++prevIndex;
        }
        this.IngredientsToQty = {};
    }
}