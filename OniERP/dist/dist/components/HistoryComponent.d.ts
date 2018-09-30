/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { Check } from '../utils/types';
export interface IHistoryComponentProps {
    history?: Array<Check>;
}
export interface IHistoryComponentState {
}
declare const _default: React.ComponentClass<Pick<IHistoryComponentProps, never>> & {
    WrappedComponent: React.ComponentType<IHistoryComponentProps>;
};
export default _default;
