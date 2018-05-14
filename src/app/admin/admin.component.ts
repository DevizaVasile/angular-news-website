import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'zone.js/dist/zone';
import { timer } from 'rxjs/observable/timer';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule , MatTabsModule } from '@angular/material';

import { TagsService } from '../tags.service'
import { AuthServiceService } from '../auth-service.service'
import { Router } from"@angular/router"

import { FirebaseObjectObservable ,FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

import {User} from '../user'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthServiceService]
  
})
export class AdminComponent implements OnInit {

  private user:User;
  private ready=false;
  private accesLVL;
  public author=false;
  public redactor=false;

 

  constructor(public authService:AuthServiceService, public router:Router) { 

    
    //this.userObserver.subscribe(val => {console.log(val)});

  }

  

  ngOnInit() {

    
    
      const source = timer(5000);
      const subscribe = source.subscribe(val => 
      {
        if( this.authService.user.getValue() == null )
        {
          this.router.navigate(['login']);
        }

        let user=this.authService.user.getValue();
        let accesLVL=user.roles;
        if (accesLVL.redactor!=true && accesLVL.author!=true)
        {
          this.router.navigate(['login']);
        }

        this.user=this.authService.user.getValue()
        this.accesLVL=this.user.roles
        this.author=this.accesLVL.author;
        this.redactor=this.accesLVL.redactor;
        this.ready=true;
   
      });

    
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
