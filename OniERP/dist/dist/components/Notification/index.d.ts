/// <reference types="react" />
/// <reference types="react-redux" />
import { Component } from 'react';
import * as React from 'react';
import './styles.scss';
export declare enum VariantIcon {
    success = 0,
    warning = 1,
    error = 2,
    info = 3,
}
export interface INotificationComponentProps {
    message: string;
    type: VariantIcon;
    clearError?: () => void;
}
export interface INotificationComponentState {
}
export declare class NotificationComponent extends Component<INotificationComponentProps, INotificationComponentState> {
    getIcon(): any;
    getClass(): any;
    handleClose: () => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<INotificationComponentProps, never>> & {
    WrappedComponent: React.ComponentType<INotificationComponentProps>;
};
export default _default;
