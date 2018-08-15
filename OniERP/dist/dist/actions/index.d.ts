export declare function itemsHasErrored(bool: any): {
    type: string;
    hasErrored: any;
};
export declare function itemsIsLoading(bool: any): {
    type: string;
    isLoading: any;
};
export declare function itemsFetchDataSuccess(items: any): {
    type: string;
    items: any;
};
export declare function errorAfterFiveSeconds(): (dispatch: any) => void;
export declare const itemsFetchData: (url: any) => (dispatch: any) => Promise<void>;
export declare const ProcessLoadPage: (route: string) => (dispatch: any) => Promise<void>;
export declare const ProcessCopyPages: (array: any) => (dispatch: any) => Promise<void>;
export declare const LoadPage: any;
export declare const AddPage: any;
export declare const UpdatePage: any;
export declare const RemovePage: any;
export declare const CopyPages: any;
export declare const RestoreDefaultLayout: any;
export declare const ProcessRestoreDefaultLayout: () => (dispatch: any) => Promise<void>;
export declare const RetrieveOAuth2Info: any;
export declare const GetUser: any;
export declare const AddNotificaion: any;
export declare const ClearNotifications: any;
export declare const ShowBusy: any;
