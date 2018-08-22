/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
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
declare const _default: React.ComponentClass<Pick<any, string>> & {
    WrappedComponent: React.ComponentType<any>;
};
export default _default;
