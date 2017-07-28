import SubRecipe from "./SubRecipe"
import { Status }  from './Status'

export default class Recipe {
    id: number;
    name: string;  
    categoryid: number;
    subrecipes: Array<SubRecipe>;
    status: Status;

    constructor() {
        this.subrecipes = new Array<SubRecipe>();
    }
}