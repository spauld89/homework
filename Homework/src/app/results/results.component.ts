import { Component } from '@angular/core';

@Component({
  selector: 'hw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent  {
  public repo: repo = {
    name: 'react',
    url: 'https://github.com/facebook/react',
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    owner: "facebook",
    avatar: "https://avatars0.githubusercontent.com/u/69631?v=3",
    forks: 1500,
    watchers: 94325
  };
}
