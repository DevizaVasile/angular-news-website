import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {} from 'firebase/database/'


import { Tags } from './tags.model'

@Injectable()
export class TagsService {

  tags:FirebaseListObservable<any[]>;
  //citiesRef:AngularFirestoreCollection = this.database.collection("cities");
  keys:Array<any[]>;

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


 removeTag($key)
 {
   this.tags.remove($key)
 }

 changeTagValue($key,newValue)
 {
   let ref=this.database.object('tags/'+$key);
   ref.set(newValue)
 }


  
}
