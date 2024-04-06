import { Component } from '@angular/core';
import { MatcherService } from 'src/app/services/matcher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})

export class MatchComponent {
  matches: any[] = []; // Initialize matches array as empty

  constructor(private matcherService: MatcherService,private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.matcherService.getUsersList().subscribe(
      (response) => {
        console.log('Response:', response);
        this.matches = response.data.getUsersList; // Update matches array with data from response
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }

  navigateToUserProfile(id:string)
  {
    this.router.navigate((['/userProfile', id]))
  }
}
