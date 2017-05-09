let nextIngredientId = 1;

export default class Ingredient {
    Id: number;
    Name: string; 
    Price: number;   

    constructor(name: string, price: number, prevIndex?: number) {
        this.Name = name;
        this.Price = price;
        if (!!prevIndex) {
            nextIngredientId = ++prevIndex;
        }
        this.Id = nextIngredientId++;
    }
}