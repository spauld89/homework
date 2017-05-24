import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

@Component({
  selector: 'hw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public sortingProperties: string[] = [
    'name',
    'forks',
    'watchers'
  ];

  public search(val: string){
    this.onSearch.emit(val);
  }
}
