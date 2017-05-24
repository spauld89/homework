import { Injectable } from '@angular/core';
import {
  BaseRequestOptions, Headers,
  Http, Request, Response, XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpService extends Http {

  public constructor(
    _backend: XHRBackend,
    _defaultOptions: BaseRequestOptions
  ) {
    super(_backend, _defaultOptions);
  }

  public get<T>(
    url: string,
    headersObj: { [key: string]: string } = { 'Content-Type': 'text/html' }
  ): Observable<T> {
    const headers: Headers = new Headers();
    Object.keys(headersObj)
      .forEach((key: string) => headers.append(key, headersObj[key]));
    return this.request(new Request(this._defaultOptions.merge({
      url,
      headers,
      method: 'GET'
    })))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
