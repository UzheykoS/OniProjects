export interface ITestComponentProps {
    label?: string;
    items?: any;
    hasErrored?: boolean;
    isLoading?: boolean;
    isScriptLoaded?: boolean;
    isScriptLoadSucceed?: boolean;
    fetchData?: (url: string) => void;
    appendData?: (url: string, data: any[]) => void;
    updateData?: (url: string, data: any[]) => void;
}
export interface ITestComponentState {
    isSignedIn?: boolean;
}
declare const _default: any;
export default _default;
