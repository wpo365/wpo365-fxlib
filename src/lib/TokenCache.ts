/*!
 * @overview  wpo365-fxlib - a tiny helper library intended to offer developers that want to build custom integrations for WordPress and Microsoft Office 365. It expects WordPress Single Sign-on plugin wpo365-login(-premium) to be installed, activated and configured. For documentation please visit https://www.wpo365.com/.
 * @copyright Copyright (c) 2018 Marco van Wieren
 * @license   Licensed under MIT license
 * @version   v0.1.2
 */

import Axios from 'axios';
import { Promise, Thenable } from 'es6-promise';

export class TokenCache {
  private static tokens: IToken[] = [];
  private static instance: TokenCache = null;

  private constructor() {
    const tokenCache = localStorage.getItem('wpo365TokenCache');
    if (tokenCache) {
      TokenCache.tokens = JSON.parse(tokenCache);
      console.log(TokenCache.tokens);
    }
  }

  /**
   *
   * @param request TokenRequest          The TokenRequest object
   * @param options ITokenRequestOptions  Optional ITokenRequestOptions
   */
  public static getToken(
    request: TokenRequest,
    options?: ITokenRequestOptions
  ): Promise<IToken | TokenRequestError> {
    return new Promise<IToken | TokenRequestError>(
      (
        resolve: (value?: IToken | Thenable<IToken>) => void,
        reject: (error?: any) => void
      ) => {
        if (TokenCache.instance == null) {
          TokenCache.instance = new TokenCache();
        }
        for (let token of TokenCache.tokens) {
          if (token.name == request.name) {
            if (token.expires > Date.now()) {
              console.log('INFO: Getting cached token');
              console.log(TokenCache.tokens);
              resolve(token);
              return;
            }
          }
        }
        const data = new FormData();
        data.append('action', 'get_tokencache');
        data.append('resource', request.toString());
        data.append('nonce', options.nonce);
        Axios.post(options.wpAjaxAdminUrl, data)
          .then(function(response: any) {
            console.log(response);
            if (response.status == 200) {
              if (response.data.status == 'OK') {
                const result = response.data.result.split(',');
                const token = {
                  name: request.name,
                  expires: parseInt(result[0]) * 1000,
                  bearer: result[1]
                };
                for (let i = TokenCache.tokens.length - 1; i >= 0; i--) {
                  if (TokenCache.tokens[i].name == request.name) {
                    TokenCache.tokens.splice(i, 1);
                  }
                }
                TokenCache.tokens.push(token);
                localStorage.setItem(
                  'wpo365TokenCache',
                  JSON.stringify(TokenCache.tokens)
                );
                resolve(token);
              } else {
                const responseError = new TokenRequestError();
                if (response && response.data)
                  responseError.data = response.data;
                throw responseError;
              }
            } else {
              const error = new TokenRequestError();
              error.data = {
                status: 'NOK',
                error_codes: '-1',
                message: 'Unknown error occurred',
                result: null
              };
              throw error;
            }
          })
          .catch(function(error) {
            reject(error);
          });
      }
    );
  }
}

export interface ITokenRequestOptions {
  nonce: string;
  wpAjaxAdminUrl: string;
}

export interface IToken {
  name: string;
  expires: number;
  bearer: string;
}

export class TokenRequestError extends Error {
  data: ITokenResponse;
}

export interface ITokenResponse {
  status: string;
  error_codes: string;
  message: string;
  result: string;
}

export class TokenRequest {
  public name: string;
  public resourceId: string;
  public constructor(name: string, resourceId: string) {
    this.name = name;
    this.resourceId = resourceId;
  }
  toString(): string {
    return this.name + ',' + this.resourceId;
  }
}
