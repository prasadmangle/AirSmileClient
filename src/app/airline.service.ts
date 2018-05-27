import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Airline } from './airline';
import 'rxjs/add/operator/map';

@Injectable()
export class AirlineService {

  constructor(private http: Http) {
  }

  //retriving airlines
  getAirlines() {
    return this.http.get('http://localhost:3000/api/airlines')
      .map(res => res.json());
  }

  getOneAirline(id) {
    return this.http.get('http://localhost:3000/api/airlines/' + id)
      .map(res => res.json());
  }

  addAirline(newAirline) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/airlines', newAirline, { headers: headers })
      .map(res => res.json());
  }

  updateOneAirline(airline: Airline) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.patch('http://localhost:3000/api/airlines/' + airline._id, airline, { headers: headers })
      .map(res => res.json());
  }

  removeAirline(id) {
    console.log("Inside removeAirline :" + id)
    return this.http.delete('http://localhost:3000/api/airlines/' + id)
      .map(res => res.json());
  }

  addComment(airline, comment, userEmail) {
    console.log(comment);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log(airline);

    const request = {
      "_id": airline._id,
      "userEmail": userEmail
    }

    return this.http.post('http://localhost:3000/api/comments/' + comment, request, { headers: headers })
      .map(res => res.json());
  }

  addRating(airline, userEmail, starratings) {
    if (starratings === null)
      return;
    console.log(starratings);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const request = {
      "_id": airline._id,
      "userEmail": userEmail
    }

    return this.http.post('http://localhost:3000/api/starratings/' + starratings, request, { headers: headers })
      .map(res => res.json());
  }

  removeComment(airline, comment) {
    console.log("inside service removeComment");
    console.log(comment);
    console.log(airline);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var data = {
      comment_id: comment._id,
      airline_id: airline._id
    }

    return this.http.post('http://localhost:3000/api/comments/', data, { headers: headers })
      .map(res => res.json());
  }

}
