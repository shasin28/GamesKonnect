import { Component } from '@angular/core';
import { MatcherService } from 'src/app/services/matcher.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})

export class MatchComponent {
  matches: any[] = [
    {
      username: 'John Doe'
    },
    {
      username: 'Jane Smith'
    },
  ];
 // constructor(private matcherService: MatcherService) { }

  /*ngOnInit(): void {
    this.fetchAllMatches();
  }

  fetchAllMatches(): void {
    this.matcherService.getAllMatches().subscribe(
      (matches: any[]) => {
        this.matches = matches;
      }
    );
  }*/

}
