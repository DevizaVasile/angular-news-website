import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model'

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import 'rxjs/observable/of'

import { ArticleService } from '../article.service'

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css'],
  providers:[ArticleService]
})
export class PostCategoryComponent implements OnInit {

  postCategory:string;
  articles: FirebaseListObservable<any[]>;
 

  constructor(private route: ActivatedRoute, private location: Location, private articleService:ArticleService,private router:Router) 
  {

  }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.postCategory = urlParameters['name'];
      this.articles=this.articleService.getArticlesByCategory(this.postCategory)
    }); 

    this.articles=this.articleService.getArticlesByCategory(this.postCategory)
  }

  goToArticle(clickedArticle:Article)
  {
    //this.articleService.getArticleByID()
    //console.log(clickedArticle.$key)
    this.router.navigate(['article',clickedArticle.$key])
  }
 







}
