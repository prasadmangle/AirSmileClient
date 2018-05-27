import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  registerUser(newUser : User) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/users/register', newUser, { headers: headers })
      .map(res => res.json());
  }

  login(user : any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/users/login', user, { headers: headers })
      .map(res => res.json());
  }
}
