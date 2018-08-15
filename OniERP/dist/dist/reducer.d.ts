import { Action } from "redux-actions";
import { Check } from './utils/types';
declare const _default: (state: {
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
}, action: Action<{
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
}>) => {
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
};
export default _default;
