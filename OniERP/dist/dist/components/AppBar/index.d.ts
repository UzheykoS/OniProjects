/// <reference types="react" />
import { Component } from 'react';
import './styles.scss';
export interface IAppBarComponentProps {
    classes?: any;
    title?: string;
    isSignedIn?: boolean;
    history?: any;
    onLoginClick?: () => void;
    onLogoutClick?: () => void;
}
export interface IAppBarComponentState {
    anchorEl?: any;
}
export declare class AppBar extends Component<IAppBarComponentProps, IAppBarComponentState> {
    constructor(props: any);
    handleClick: (event: any) => void;
    handleClose: (option: any) => void;
    handleLoginClick: () => void;
    renderMenu(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
