import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../auth-service.service"
import { Router } from "@angular/router"
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  img403src:string;
  constructor(private authService:AuthServiceService, private router:Router) {
    this.img403src='assets/img/403forbiddenerror.jpg'
   }

  ngOnInit() {
  }

  login() {
    this.authService.googleLogin().then((data) => {
      this.router.navigate(['']);
    })
  }

}
