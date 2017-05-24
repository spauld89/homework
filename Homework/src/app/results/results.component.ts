import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../common/services/search/search.service';

@Component({
  selector: 'hw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  public repos: repo[];

  private _searchSubject$$: Subject<string> = new Subject();

  public constructor(
    private _searchService: SearchService
  ){}

  @Input()
  public set searchValue(searchValue: string) {
    this._searchSubject$$.next(searchValue);
  }

  public ngOnInit(): void {
    this._searchSubject$$.subscribe((searchValue: string) => {
      this._searchService.getRepos(searchValue)
        .subscribe((repos: repo[]) => {
          this.repos = repos;
        });
    });
  }
}
