import { Injectable } from '@angular/core';

import { Article } from './article.model';

import * as _ from 'lodash';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service'

@Injectable()
export class ArticleService {

  articles:FirebaseListObservable<any[]>;
  userRoles: Array<string>; 
  user:any;
  headerArticle:FirebaseListObservable<any>;


  itemRef: FirebaseObjectObservable<any>;
  item: Observable<any>;

  constructor(private database: AngularFireDatabase , private auth:AuthServiceService) 
  {
    this.articles = database.list('articles');
    this.headerArticle = database.list('dashboard/')

    auth.user.map(user => {
      /// Set an array of user roles, ie ['admin', 'author', ...]
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })
    .subscribe()

    this.auth.user.subscribe( nothing =>
    {
      this.user=this.auth.user.getValue()
      
    })

    
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


  getArticleByAuthor(authorName:string)
  {
    return this.database.list("articles" , {query:{author:authorName}})
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


  public setHeadArticle(articleID:string)
  {
    let ref = this.database.object("dashboard/mainHead/")
    ref.update({value:articleID})
  }

  public set1Of4(articleID:string)
  {
    let ref = this.database.object("dashboard/head1/")
    ref.update({value:articleID})
  }

  public set2Of4(articleID:string)
  {
    let ref = this.database.object("dashboard/head2/")
    ref.update({value:articleID})
  }

  public set3Of4(articleID:string)
  {
    let ref = this.database.object("dashboard/head3/")
    ref.update({value:articleID})
  }

  public set4Of4(articleID:string)
  {
    let ref = this.database.object("dashboard/head4/")
    ref.update({value:articleID})
  }

  public getHeadArticle()
  {
    this.itemRef=this.database.object("dashboard")
    console.log(this.database.list("dashboard", {query:{equalTo:"mainHead"}}) )
     return this.database.list("dashboard", {query:{equalTo:"mainHead"}}) 

  }







}
