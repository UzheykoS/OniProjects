/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { Check } from '../utils/types';
export interface INewOrderComponentProps {
    check?: Check;
}
export interface INewOrderComponentState {
    showDrinks?: boolean;
    showDesserts?: boolean;
}
declare const _default: React.ComponentClass<Pick<any, string>> & {
    WrappedComponent: React.ComponentType<any>;
};
export default _default;
