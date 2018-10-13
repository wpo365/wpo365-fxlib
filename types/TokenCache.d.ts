import { Promise } from 'es6-promise';
export declare class TokenCache {
    private static tokens;
    private static instance;
    private constructor();
    static getToken(request: TokenRequest, options: ITokenRequestOptions): Promise<IToken | TokenRequestError>;
}
export interface ITokenRequestOptions {
    wpAjaxAdminUrl: string;
}
export interface IToken {
    name: string;
    expires: number;
    bearer: string;
}
export declare class TokenRequestError extends Error {
    data: ITokenResponse;
}
export interface ITokenResponse {
    status: string;
    error_codes: string;
    message: string;
    result: string;
}
export declare class TokenRequest {
    name: string;
    resourceId: string;
    constructor(name: string, resourceId: string);
    toString(): string;
}
