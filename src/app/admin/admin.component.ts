import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'zone.js/dist/zone';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule , MatTabsModule } from '@angular/material';

import { TagsService } from '../tags.service'
import { AuthServiceService } from '../auth-service.service'
import { Router } from"@angular/router"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthServiceService]
  
})
export class AdminComponent implements OnInit {

  
  constructor(public authService:AuthServiceService, public router:Router) { 
    
  }

  ngOnInit() {

  }

  login() {
    this.authService.googleLogin().then((data) => {
      this.router.navigate(['']);
    })
  }

  logout()
  {
    this.authService.signOut();
  }

}
