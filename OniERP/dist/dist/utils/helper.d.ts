export interface BearerToken {
    AccessToken: any;
    ExpiresOn: Date;
}
export interface OAuth2Info {
    OAuth2Authority: string;
    OAuth2ClientId: string;
    OAuth2RedirectUri: string;
    OAuth2ResourceIdentifier: string;
    OAuth2TokenService: string;
}
declare class Helper {
    static TokenCookieName: string;
    static GUIDEmpty: string;
    static O: any;
    static guid: () => string;
    static getParameterByNameFromUri: (name: any, url: any) => string;
    static getQueryVariable: (variable: string) => string | false;
}
export default Helper;
