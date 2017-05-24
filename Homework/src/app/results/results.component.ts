import { Component, Input } from '@angular/core';

@Component({
  selector: 'hw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent  {
  @Input()
  public repo: repo;
}
