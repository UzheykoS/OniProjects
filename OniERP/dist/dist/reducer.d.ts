import { Action } from "redux-actions";
import { Check } from './utils/types';
declare const _default: (state: {
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
    log: string;
}, action: Action<{
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
    log: string;
}>) => {
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
    log: string;
};
export default _default;
