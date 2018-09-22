import { Check, DessertType, DrinksType } from '../utils/types';
export interface INewOrderComponentProps {
    check?: Check;
    history?: any;
    deleteDessert?: (type: DessertType, taste: string, size: string) => void;
    deleteDrink?: (type: DrinksType, size: string) => void;
}
export interface INewOrderComponentState {
    showDrinks?: boolean;
    showDesserts?: boolean;
}
declare const _default: any;
export default _default;
