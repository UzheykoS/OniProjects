/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { Component } from 'react';
import { DrinksType } from '../utils/types';
export interface IDrinksComponentProps {
    addDrink?: (type: DrinksType, size: string) => void;
    handleClose?: () => void;
    logData?: (text: string) => void;
}
export interface IDrinksComponentState {
    drinkType?: DrinksType;
    drinkSize?: string;
}
export declare class DrinksComponent extends Component<IDrinksComponentProps, IDrinksComponentState> {
    constructor(props: any);
    handleClose: () => void;
    handleDrinkSelect: (drink: any) => Promise<void>;
    handleDrinkSizeSelect: (drinkSize: any) => Promise<void>;
    renderDrinks(): JSX.Element;
    renderDrinkSizes(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<any, string>, any> & {
    WrappedComponent: typeof DrinksComponent;
};
export default _default;
