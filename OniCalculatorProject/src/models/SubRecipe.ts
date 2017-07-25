import Ingredient from "./Ingredient"

export default class SubRecipe {
    id: number;
    name: string;  
    ingredientstoqty: { [key: number]: { Qty: number, Desc?: string }; };

    constructor() {
        this.ingredientstoqty = {};
    }

    // constructor(name: string, id: number) {
    //     this.Name = name;
    //     this.Id = id;
    //     this.IngredientsToQty = {};
    // }
}