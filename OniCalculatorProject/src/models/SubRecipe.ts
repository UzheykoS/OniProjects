import Ingredient from "./Ingredient"

export default class SubRecipe {
    Id: number;
    Name: string;  
    IngredientsToQty: { [key: number]: { Qty: number, Desc?: string }; };

    constructor() {
        this.IngredientsToQty = {};
    }

    // constructor(name: string, id: number) {
    //     this.Name = name;
    //     this.Id = id;
    //     this.IngredientsToQty = {};
    // }
}