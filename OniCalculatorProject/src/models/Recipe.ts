import SubRecipe from "./SubRecipe"

export default class Recipe {
    Id: number;
    Name: string;  
    CategoryId: number;
    SubRecipes: Array<SubRecipe>;

    constructor() {
        this.SubRecipes = [];
    }

    // constructor(name: string, id: number, categoryId: number) {
    //     this.Name = name;
    //     this.Id = id;
    //     this.CategoryId = categoryId; 
    //     this.SubRecipes = [];
    // }
}