import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {MatPaginator,MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[AuthServiceService,AngularFireAuth]
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthServiceService,private router:Router) {
  }


  ngOnInit() {
  }

  login() {
    this.authService.googleLogin().then((data) => {
      this.router.navigate(['']);
    })
  }

}
