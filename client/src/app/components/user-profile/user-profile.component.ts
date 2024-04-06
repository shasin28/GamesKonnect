import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MatcherService } from 'src/app/services/matcher.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userInfo: any; // Variable to store user information

  constructor(private matcherService: MatcherService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id'); // Retrieve user ID from route parameters
      if (userId) { // Check if userId is not null
        this.getUserInfo(userId); // Fetch user information using the retrieved ID
      } else {
        console.error('User ID is null.'); // Handle the case when userId is null
      }
    });
  }
  getUserInfo(userId: string): void {
     // Specify the user ID
    this.matcherService.getUserById(userId).subscribe(
      (response) => {
        this.userInfo = response.data.getUser; // Assign user info from response
      },
      (error) => {
        console.error('Error fetching user info:', error);
      }
    );
  }
}

