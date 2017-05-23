import { Component } from '@angular/core';

@Component({
  selector: 'hw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public sortingProperties: string[] = [
    'name',
    'forks',
    'watchers'
  ];
  public sortProp: string;
}
