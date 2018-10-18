/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { Component } from 'react';
import { DessertType } from '../utils/types';
export interface IDessertsComponentProps {
    addDessert?: (type: DessertType, taste: string, size: string, quantity: number) => void;
    handleClose?: () => void;
    logData?: (text: string) => void;
}
export interface IDessertsComponentState {
    dessertType?: DessertType;
    dessertTaste?: string;
    dessertQuantities?: {
        [id: string]: number;
    };
}
export declare class DessertsComponent extends Component<IDessertsComponentProps, IDessertsComponentState> {
    constructor(props: any);
    handleClose: () => void;
    handleDessertSelect: (dessert: any) => void;
    handleDessertTasteSelect: (taste: any) => Promise<void>;
    handleDessertMixSelect: (qty: any) => Promise<void>;
    handleDessertMixDecrease: (qty: any) => void;
    handleDessertSizeOrQuantitySelect: (sizeOrQty: any) => Promise<void>;
    handleFinish: () => Promise<void>;
    getId(dessertType: any, dessertTaste: any): string;
    handleDessertIncrease: (taste: any, qty?: number) => void;
    handleDessertDecrease: (taste: any, qty?: number) => void;
    countTotalDessertQuantity(): number;
    getArrayFromEnum(en: any): {
        id: string;
        value: any;
    }[];
    renderDesserts(): JSX.Element;
    renderDessertTastes(): JSX.Element;
    renderDessertSize(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<any, string>, any> & {
    WrappedComponent: typeof DessertsComponent;
};
export default _default;
