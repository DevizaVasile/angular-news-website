import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../article.model';
import { Tags } from '../tags.model'
import { HeadingComponent } from '../heading/heading.component'

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ArticleService} from '../article.service';

import { ReversePipe } from '../reverse.pipe'




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:  [ArticleService]
})
export class HomePageComponent implements OnInit {


  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articleService:ArticleService) {


   }

   goToArticle(clickedArticle:Article)
   {
     //this.articleService.getArticleByID()
     console.log(clickedArticle.$key)
     this.router.navigate(['article',clickedArticle.$key])
   }

  ngOnInit() {

    this.articles=this.articleService.getLastArticles(10);

  }


}
