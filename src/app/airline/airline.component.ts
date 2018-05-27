import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { AdminGuard } from '../admin.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  comment: string;
  starsCount: number;



  @Output() deleteAirline: EventEmitter<Airline>;

  constructor(private airlineService: AirlineService, private adminGuard: AdminGuard, private router: Router) {
    this.deleteAirline = new EventEmitter();
  }

  ngOnInit() {

  }

  @Input() airline: Airline;

  deleteClickHandler() {
    this.deleteAirline.emit(this.airline);
  }

  removeCommentHandler(comment) {
    console.log(comment);
    var res = this.airlineService.removeComment(this.airline, comment)
      .subscribe(airline => {
        this.airline = airline;
      });
    console.log(res);
  }

  NavigateToDetails() {
    this.router.navigate(['/airline', this.airline._id]);
  }


}
