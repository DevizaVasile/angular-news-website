import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../auth-service.service"
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap'
import { User } from "../user"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthServiceService]
})
export class NavigationComponent implements OnInit {


  constructor(public authService:AuthServiceService, public router:Router)
  {}


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
