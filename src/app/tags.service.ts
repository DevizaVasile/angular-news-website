import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {} from 'firebase/database/'


import { Tags } from './tags.model'

@Injectable()
export class TagsService {

  tags:FirebaseListObservable<any[]>;
  //citiesRef:AngularFirestoreCollection = this.database.collection("cities");
  keys:Array<any[]>;

  cats:FirebaseListObservable<any[]>;
  catKeys:Array<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.tags=database.list('tags');
    this.cats=database.list('categories');
  }

  getTags()
  {
    return this.tags;
  }

  addTag(newTags: string) {
   this.tags.push(newTags);
 }

 getTagByID(tagID:string)
 {
   return this.database.object('tags/' + tagID)
 }


 removeTag($key)
 {
   this.tags.remove($key)
 }

 changeTagValue($key,newValue)
 {
   let ref=this.database.object('tags/'+$key);
   ref.set(newValue)
 }

 getCats()
 {
   return this.cats;
 }

 addCat(newCat:string)
 {
   this.cats.push({value:newCat});
 }

 getCatByID(catID:string)
 {
   return this.database.object('categories/'+catID)
 }

 removeCat($key)
 {
   this.cats.remove($key)
 }

 changeCatValue($key,newValue)
 {
   let ref=this.database.object('categories/'+$key);
   ref.set(newValue)
 }

  
}
