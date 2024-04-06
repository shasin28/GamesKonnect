import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  hide = true;
  @Input() username!: string;
  @Input() password!: string;

  ngOnInit() {
  }

  onLogin() {

  }

  onSignUp(){
      this.router.navigate(['/signup'])
    }
}
