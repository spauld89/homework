import { Component, Input } from '@angular/core';

@Component({
  selector: 'hw-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {
  @Input()
  public repo: repo;
}
