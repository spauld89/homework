import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public search(val: string){
    this.onSearch.emit(val);
  }
}
