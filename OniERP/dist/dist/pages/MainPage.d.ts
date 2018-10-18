/// <reference types="react" />
/// <reference types="react-redux" />
import { Component } from 'react';
import * as React from 'react';
import { Check } from '../utils/types';
export interface IMainPageProps {
    history?: Array<Check>;
    isLoading?: boolean;
    createCheck?: () => void;
    logData?: (text: string) => void;
    fetchData?: (url: string) => void;
}
export declare class MainPage extends Component<IMainPageProps, any> {
    componentDidMount(): void;
    onNewCheckClick: () => void;
    onNewPartnersCheckClick: () => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<IMainPageProps, never>, any> & {
    WrappedComponent: typeof MainPage;
};
export default _default;
