import { Injectable } from '@angular/core';

import { Article } from './article.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {

  articles:FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) 
  {
    this.articles = database.list('articles');
   }

   getArticles()
   {
     return this.articles;
   }

   addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  getArticleByID(articleID:string)
  {
    return this.database.object('articles/' + articleID)
  }

  getLastArticles(n)
  {
    return this.database.list("articles", {query:{limitToFirst:n,}});
  }



}
