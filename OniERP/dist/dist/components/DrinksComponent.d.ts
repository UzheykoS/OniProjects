/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { DrinksType } from '../utils/types';
export interface IDrinksComponentProps {
    addDrink?: (type: DrinksType, size: string) => void;
    handleClose?: () => void;
}
export interface IDrinksComponentState {
    drinkType?: DrinksType;
    drinkSize?: string;
}
declare const _default: React.ComponentClass<Pick<any, string>> & {
    WrappedComponent: React.ComponentType<any>;
};
export default _default;
