import { Injectable } from '@angular/core';

import { Article } from './article.model';

import * as _ from 'lodash';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service'
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ArticleService {

  articles:FirebaseListObservable<any[]>;
  catArticles:FirebaseListObservable<any[]>;
  userRoles: Array<string>; 
  user:any;


  itemRef: FirebaseObjectObservable<any>; //head article
  public item: Observable<any>; //head title

  itemRef1Of4:FirebaseObjectObservable<any>;
  public item1Of4: Observable<any>; 

  itemRef2Of4:FirebaseObjectObservable<any>;
  public item2Of4: Observable<any>;

  itemRef3Of4:FirebaseObjectObservable<any>;
  public item3Of4: Observable<any>;

  itemRef4Of4:FirebaseObjectObservable<any>;
  public item4Of4: Observable<any>;

  constructor(private database: AngularFireDatabase , private auth:AuthServiceService) 
  {
    this.articles = database.list('articles');

    
    //head
    this.itemRef = this.database.object("dashboard/mainHead/")
    this.itemRef.subscribe( val =>{
      this.itemRef.forEach(elem => {this.item=elem.value})
    })

    //1of4
    this.itemRef1Of4 = this.database.object("dashboard/head1/")
    this.itemRef1Of4.subscribe( val =>{
      this.itemRef1Of4.forEach(elem => {this.item1Of4=elem.value})
    })

     //2of4
     this.itemRef2Of4 = this.database.object("dashboard/head2/")
     this.itemRef2Of4.subscribe( val =>{
       this.itemRef2Of4.forEach(elem => {this.item2Of4=elem.value})
     })

    //3of4
    this.itemRef3Of4 = this.database.object("dashboard/head3/")
    this.itemRef3Of4.subscribe( val =>{
      this.itemRef3Of4.forEach(elem => {this.item3Of4=elem.value})
    })

    //4of4
    this.itemRef4Of4 = this.database.object("dashboard/head4/")
    this.itemRef4Of4.subscribe( val =>{
      this.itemRef4Of4.forEach(elem => {this.item4Of4=elem.value})
    })


 

   
   

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
    return this.database.object('/articles/' + articleID)
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
    return this.item
  }

  public get1Of4Head()
  {
    return this.item1Of4
  }

  public get2Of4Head()
  {
    return this.item2Of4
  }

  public get3Of4Head()
  {
    return this.item3Of4
  }

  public get4Of4Head()
  {
    return this.item4Of4
  }

  //category filtering
  public getArticlesByCategory(category:string)
  {
    
    return this.database.list('articles', {query:{orderByChild:'category',equalTo:category}})
  }







}
