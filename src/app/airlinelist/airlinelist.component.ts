import { Component, OnInit } from '@angular/core';
import {AirlineService} from '../airline.service';
import {Airline} from '../airline';
import { Router } from '@angular/router';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-airlinelist',
  templateUrl: './airlinelist.component.html',
  styleUrls: ['./airlinelist.component.css'],
  providers : [AirlineService]
})



export class AirlinelistComponent implements OnInit {

   //airlines: string[] = ["P1","P2","P3","P4","P5"  ];
   airlines : Airline[];
   name:string;

  constructor(private airlineService: AirlineService) { }

  ngOnInit() {
    this.airlineService.getAirlines().subscribe(p => this.airlines = p);
  }  

  addAirline(){
    const newAirline = {
      name : this.name
    }

    this.airlineService.addAirline(newAirline)
    .subscribe(airline=>{
      this.airlines.push(airline);
    });

    this.name = '';
  }

  removeAirline(airline){

    var airlines = this.airlines;
    this.airlineService.removeAirline(airline._id)
    .subscribe(data=>{
      
      
        for(var i =0; i< airlines.length;i++)
        {
          

          if(airlines[i]._id == airline._id)
          {
            console.log(i +"-"+airlines[i]._id+ "-"+airlines[i].name+"<-- Deleted");
            airlines.splice(i,1);            
          }
          else
          {
            console.log(i +"-"+airlines[i]._id+ "-"+airlines[i].name);
          }
        }
      
    })
    
  }

}
