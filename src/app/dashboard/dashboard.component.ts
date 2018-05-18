import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {ArticleService} from '../article.service'
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from "rxjs"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[AuthServiceService,AngularFireAuth,ArticleService]
})
export class DashboardComponent implements OnInit {

 
  constructor(public authService:AuthServiceService,private router:Router,public artService:ArticleService) {
   
  }


  ngOnInit() {
   
  }

  changeHead(headChange)
  {
    this.artService.setHeadArticle(headChange)
  }

  change1Of4(headChange)
  {
    this.artService.set1Of4(headChange)
  }

  change2Of4(headChange)
  {
    this.artService.set2Of4(headChange)
  }

  change3Of4(headChange)
  {
    this.artService.set3Of4(headChange)
  }

  change4Of4(headChange)
  {
    this.artService.set4Of4(headChange)
  }

  set_set1Of4(_1of4)
  {
    this.artService.set1Of4(_1of4)
  }

  set_set2Of4(_2of4)
  {
    this.artService.set2Of4(_2of4)
  }

  set_set3Of4(_3of4)
  {
    this.artService.set3Of4(_3of4)
  }

  set_set4Of4(_4of4)
  {
    this.artService.set4Of4(_4of4)
  }

 



}
