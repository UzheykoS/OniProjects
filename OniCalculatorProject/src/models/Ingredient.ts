let nextIngredientId = 1;

export default class Ingredient {
    Id: number;
    Name: string;    

    constructor(name: string, prevIndex?: number) {
        this.Name = name;
        if (!!prevIndex) {
            nextIngredientId = ++prevIndex;
        }
        this.Id = nextIngredientId++;
    }
}