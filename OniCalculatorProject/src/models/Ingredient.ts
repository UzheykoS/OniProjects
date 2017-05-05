let nextIngredientId = 1;

export default class Ingredient {
    Id: number;
    Name: string;    

    constructor(name: string) {
        this.Name = name;
        this.Id = nextIngredientId++;
    }
}