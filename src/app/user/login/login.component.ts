import { Component, OnInit } from '@angular/core';
import {UserCredentials} from '../user-credentials';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.userCredentials = new UserCredentials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authenticationService.signOutUser();
  }

  onSignIn() {
    console.log(this.userCredentials);
    this.loginFailed = false;
    this.errorMessage = '';
    this.authenticationService.signInUser(this.userCredentials)
      .subscribe(result => {
        this.router.navigate(['/contacts']);
    }, error => {
        this.userCredentials.username = '';
        this.userCredentials.password = '';
        this.loginFailed = true;
        this.errorMessage = 'Sign in failed';
        console.error('User sign in failed');
      });
  }

}
