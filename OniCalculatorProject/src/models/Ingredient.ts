let nextIngredientId = 1;

export default class Ingredient {
    Id: number;
    Name: string; 
    Price: number;   
    Supplier: string;

    constructor(name: string, price: number, supplier: string, prevIndex?: number) {
        this.Name = name;
        this.Price = price;
        this.Supplier = supplier;
        if (!!prevIndex) {
            nextIngredientId = ++prevIndex;
        }
        this.Id = nextIngredientId++;
    }
}