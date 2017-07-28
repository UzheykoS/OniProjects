import { Status }  from './Status'

export default class IngredientItem {
    id: number;
    subrecipe_id: number;
    ingredient_id: number;
    quantity: number;
    description: string;
    status: Status;

    constructor() {
    }
}