/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { Check } from '../utils/types';
export interface IMainPageProps {
    history?: Array<Check>;
    createCheck?: () => void;
    logData?: (text: string) => void;
}
declare const _default: React.ComponentClass<Pick<IMainPageProps, never>> & {
    WrappedComponent: React.ComponentType<IMainPageProps>;
};
export default _default;
