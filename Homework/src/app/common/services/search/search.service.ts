import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { HttpService } from '../http/http.service';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor (
    @Inject(HttpService) private _http: HttpService,
  ) {}

  public getRepos(searchString: string): Observable<any[]> {
    return this._http.get(
      `https://api.github.com/search/repositories?q=${searchString}`,
      {
        'Content-Type': 'application/json'
      }
    );
  }
}
