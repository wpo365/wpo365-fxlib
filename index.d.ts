/*!
 * @overview  wpo365-fxlib - a tiny helper library intended to offer developers that want to build custom integrations for WordPress and Microsoft Office 365. It expects WordPress Single Sign-on plugin wpo365-login(-premium) to be installed, activated and configured. For documentation please visit https://www.wpo365.com/.
 * @copyright Copyright (c) 2018 Marco van Wieren
 * @license   Licensed under MIT license
 * @version   v0.1.2
 */
import { Promise } from 'es6-promise';
export declare class TokenCache {
  private static tokens;
  private static instance;
  private constructor();
  static getToken(
    request: TokenRequest,
    options: ITokenRequestOptions
  ): Promise<IToken | TokenRequestError>;
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
