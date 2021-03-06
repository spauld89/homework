import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { SearchService } from '../common/services/search/search.service';

@Component({
  selector: 'hw-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultsListComponent implements OnInit{
  public repos: repoList;
  public loading: boolean = false;
  private _searchSubject$$: Subject<string> = new Subject();

  public constructor(
    private _searchService: SearchService
  ){}

  @Input()
  public set searchValue(searchValue: string) {
    this._searchSubject$$.next(searchValue);
  }

  public ngOnInit(): void {
    this._searchSubject$$
      .debounceTime(300)
      .subscribe((searchValue: string) => {
      this.loading = true;
      this._searchService.getRepos(searchValue)
        .subscribe((repos: repoList) => {
          this.loading = false;
          this.repos = repos;
        });
    });
  }
}
