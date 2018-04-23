import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Tags} from './tags.model'

@Injectable()
export class TagsService {

  tags:FirebaseListObservable<any[]>;
  citiesRef:AngularFirestoreCollection = this.database.collection("cities");


  constructor(private database: AngularFireDatabase) { 
    this.tags=database.list('tags');

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

 getTagByValue(tagValue:string)
 {
   return this.tags.where("name")
 }

 removeTag($key)
 {
   this.tags.remove($key)
 }


  
}
