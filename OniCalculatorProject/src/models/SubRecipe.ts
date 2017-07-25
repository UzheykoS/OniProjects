import Ingredient from "./Ingredient"

export default class SubRecipe {
    id: number;
    name: string;  
    ingredientstoqty: { [key: number]: { qty: number, desc?: string }; };

    constructor() {
        this.ingredientstoqty = {};
    }

    // constructor(name: string, id: number) {
    //     this.Name = name;
    //     this.Id = id;
    //     this.IngredientsToQty = {};
    // }
}