import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service"
import { ArticleService } from "../article.service"

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
  providers:[ArticleService,AuthServiceService]
})
export class DatabaseComponent implements OnInit {

  articles:FirebaseListObservable<any[]>;


  constructor(private authService:AuthServiceService,private articleService:ArticleService) { }

  ngOnInit() {
    this.articles=this.articleService.getArticles()
  }

}
