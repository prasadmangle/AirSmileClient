import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService, private router: Router) {
    this.message = '';
  }

  ngOnInit() {
  }

  login(email: string, password: string): boolean {
    /*this.message = '';
    if (this.authService.login(email, password) ) {
      this.message = 'Incorrect credentials.';

      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    }
    else {
      this.router.navigate(['/']);
    }*/
    this.authService.login(email, password);
    this.router.navigate(['/']);
    return false;
  }



}
