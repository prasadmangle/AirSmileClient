import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';
import { AdminGuard } from '../admin.guard';
import { LoggedInGuard } from '../logged-in.guard';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-airlinedetails',
  templateUrl: './airlinedetails.component.html',
  styleUrls: ['./airlinedetails.component.css']
})
export class AirlinedetailsComponent implements OnInit {

  id: string;
  airline: Airline = new Airline();

  comment: string;
  starsCount: number = 0;

  ctrl = new FormControl(null);

  constructor(private route: ActivatedRoute, private airlineService: AirlineService,
    private router: Router, private adminGuard: AdminGuard,
    private loggedInGuard: LoggedInGuard,
    private authService: AuthService) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.airlineService.getOneAirline(this.id).subscribe(p => {
      this.airline = p
      try {
        if (this.airline != null) {
          if (this.airline.starRatings != null) {
            var firstRating = this.airline.starRatings.filter(x => x.userEmail === this.authService.getUser())[0];
            if (firstRating != null)
              this.starsCount = firstRating.rating;
          }
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    );
    console.log(JSON.stringify(this.airline));
  }
  rateClickHandler() {

    if (this.ctrl.value != null) {
      this.airlineService.addRating(this.airline, this.authService.getUser(), this.ctrl.value).subscribe(p => {
        console.log("Rating successfull!!!");
      });
    }

  }

  canDeleteComment(userEmail) {
    if (userEmail === this.authService.getUser() || this.authService.isAdmin()) {
      return true;
    }
    else {
      return false;
    }
  }
  updateAirline() {
    this.airlineService.updateOneAirline(this.airline).subscribe(p => {
      console.log("Airline " + p.name + " updated sucessfully!!!");
      this.router.navigate(['/admin']);
    })
  }

  deleteClickHandler() {
    this.airlineService.removeAirline(this.airline._id)
      .subscribe(data => {
        console.log("Item deleted " + data._id);
        this.router.navigate(['/admin']);
      });
  }

  removeCommentHandler(comment) {
    console.log(comment);
    var res = this.airlineService.removeComment(this.airline, comment)
      .subscribe(airline => {
        this.airline = airline;
      });
    console.log(res);
  }

  addComment() {

    this.airlineService.addComment(this.airline, this.comment, this.authService.getUser())
      .subscribe(airline => {
        //this.airline.comments.push({ body: this.comment });
        this.airline = airline;
        this.comment = "";
      });

  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
