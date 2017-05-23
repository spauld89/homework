import { Component } from '@angular/core';
import { SearchService } from './common/services/search/search.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchValue: string;
  public repos$: Observable<any[]>;

  public constructor(
    private _searchService: SearchService
  ){}
  public onSearch(value: string): void {
    this.searchValue = value;
    this.repos$ = this._searchService.getRepos(this.searchValue);
    console.log(this.repos$);
  }
}
