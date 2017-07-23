import SubRecipe from "./SubRecipe"

export default class Recipe {
    id: number;
    name: string;  
    categoryid: number;
    subrecipes: Array<SubRecipe>;

    constructor() {
        this.subrecipes = [];
    }

    // constructor(name: string, id: number, categoryId: number) {
    //     this.Name = name;
    //     this.Id = id;
    //     this.CategoryId = categoryId; 
    //     this.SubRecipes = [];
    // }
}