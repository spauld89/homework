import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';

@Injectable()
export class SearchService {

  constructor (
    @Inject(HttpService) private _http: HttpService,
  ) {}

  public getRepos(searchString: string): Observable<repoList> {
    return this._http.get(
      `https://api.github.com/search/repositories?q=${searchString}`,
      {
        'Content-Type': 'application/json'
      }
    );
  }
}
