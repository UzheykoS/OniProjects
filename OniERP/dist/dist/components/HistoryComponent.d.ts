/// <reference types="react" />
/// <reference types="react-redux" />
import { Component } from 'react';
import * as React from 'react';
import { Check } from '../utils/types';
export interface IHistoryComponentProps {
    history?: Array<Check>;
}
export interface IHistoryComponentState {
}
export declare class HistoryComponent extends Component<IHistoryComponentProps, IHistoryComponentState> {
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<IHistoryComponentProps, never>, any> & {
    WrappedComponent: typeof HistoryComponent;
};
export default _default;
