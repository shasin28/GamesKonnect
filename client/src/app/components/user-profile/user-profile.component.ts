import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatcherService } from 'src/app/services/matcher.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userInfo: any;
  matches: any[] = [];

  constructor(private matcherService: MatcherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.getUsers(userId);
      } else {
        console.error('User ID is null.');
      }
    });
  }

  getUsers(userId: string): void {
    this.matcherService.getUsersList().subscribe(
      (response) => {
        console.log('Response:', response);
        this.matches = response.data.getUsersList;
        this.userInfo = this.matches.find(match => match.id === userId);
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }
  getUserInfo(userId: string): void {
    if (this.matches && this.matches.length > 0 && userId) {
      // Find the user with the matching ID
      this.userInfo = this.matches.find(match => match.id === userId);
      if (!this.userInfo) {
        console.error('User not found with ID:', userId);
      }
    }
  }
}
