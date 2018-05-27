import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  constructor(public userService: UserService) { }

  login(email: string, password: string): boolean {

    var userObj = {

      "email": email,
      "password": password
    }

    this.userService.login(userObj).subscribe(tokenObject => {
      if (tokenObject.token) {
        localStorage.setItem('username', email);
        localStorage.setItem('usertoken', "bearer " + tokenObject.token);
        localStorage.setItem('userrole', tokenObject.role);

      }
    },
      err => {
        console.log(err);
      })

    return (localStorage.getItem('usertoken') === null);


  }

  logout(): any {
    localStorage.removeItem('username');
    localStorage.removeItem('userrole');
    localStorage.removeItem('usertoken');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isAdmin(): boolean {
    return (localStorage.getItem('userrole') === 'admin');
  }
}
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
