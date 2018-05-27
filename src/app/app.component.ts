import { Component } from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import { AuthService } from './auth.service';
import { AdminGuard } from './admin.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router : Router, public authService: AuthService, private adminGuard: AdminGuard)
  {
    
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
