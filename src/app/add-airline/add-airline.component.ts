import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';


@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  name: string;
  path: string;

  constructor(private airlineService: AirlineService, private router: Router) { }

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      this.path = response;

      const newAirline = {
        name: this.name,
        imagePath: this.path
      }

      this.airlineService.addAirline(newAirline)
        .subscribe(airline => {
          console.log("Airline added!!!");
          this.router.navigate(['/admin']);
        });

      this.name = '';
    };
  }

  addAirline() {
    this.uploader.uploadAll();

  }

}
