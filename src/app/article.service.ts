import { Injectable } from '@angular/core';

import { Article } from './article.model';

import * as _ from 'lodash';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AuthServiceService } from './auth-service.service'

@Injectable()
export class ArticleService {

  articles:FirebaseListObservable<any[]>;
  userRoles: Array<string>; 

  constructor(private database: AngularFireDatabase , private auth:AuthServiceService) 
  {
    this.articles = database.list('articles');

    auth.user.map(user => {
      /// Set an array of user roles, ie ['admin', 'author', ...]
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })
    .subscribe()
    
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

  get canRead(): boolean {
    const allowed = ['editor', 'author', 'reader']
    return this.matchingRole(allowed)
  }

  get canEdit(): boolean {
    const allowed = ['editor', 'author']
    return this.matchingRole(allowed)
  }

  get canDelete(): boolean {
    const allowed = ['editor']
    return this.matchingRole(allowed)
  }

  private matchingRole(allowedRoles): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }







}
