import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public searchValue: string;
  public onSearch(value: string): void {
    this.searchValue = value;
  }
}
