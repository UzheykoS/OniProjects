import { Status }  from './Status'

export default class Ingredient {
    id: number;
    name: string;
    price: number;
    supplier: string;
    status: Status;

    constructor() {
        this.name = "";
    }
}