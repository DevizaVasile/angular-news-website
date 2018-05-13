import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
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
