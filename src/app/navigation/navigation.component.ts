import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../auth-service.service"
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap'
import { User } from "../user"
import { TagsService } from "../tags.service"
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthServiceService,TagsService]
})
export class NavigationComponent implements OnInit {

  cats:FirebaseListObservable<any[]>;

  constructor(public authService:AuthServiceService, public router:Router, public tagService:TagsService)
  {
    
  }


  ngOnInit() {
    this.cats=this.tagService.getCats();
    let vvv=this.cats.toArray();  
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

  redirectCategory(catName)
  {
    this.router.navigate(['/category',catName])
  }





}
