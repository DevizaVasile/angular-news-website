import { Component, OnInit } from '@angular/core';

import { TagsService } from '../tags.service';
import { Tags } from '../tags.model'

import { FirebaseObjectObservable ,FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-tag-editor',
  templateUrl: './tag-editor.component.html',
  styleUrls: ['./tag-editor.component.css'],
  providers: [TagsService]
})
export class TagEditorComponent implements OnInit {

  $tags:FirebaseListObservable<any[]>;
  tag_map:Map<String,String>=new Map();
 


  constructor(private tagService:TagsService) { }

  ngOnInit() {

    this.$tags=this.tagService.getTags();

  }


  addTag(newTag:string)
  { 
    this.$tags.forEach(element => { element.forEach(element_child => { this.tag_map.set(element_child.$key,element_child.$value) });});
    if (newTag.length>0)
    {
      let tagExist=false;
      let keys=Array.from(this.tag_map.keys())
      let values=Array.from(this.tag_map.values())
      let i=-1;

      for(let val of values)
      {
        i++;
        if (val==newTag)
        {
          tagExist=true;
          console.log("Tag Exist")
        }
      }
      if (!tagExist)
      {
        this.tagService.addTag(newTag)
      }
    }
  }

  removeTag(tagToRemove:string)
  {
    //iterate through all elements and generate an new map
    this.$tags.forEach(element => { element.forEach(element_child => { this.tag_map.set(element_child.$key,element_child.$value) });});
   
   let tagExist=false;
   let keys=Array.from(this.tag_map.keys())
   let values=Array.from(this.tag_map.values())
   let i=-1;

   for(let val of values)
   {
     i++;
     if (val==tagToRemove)
     {
       this.tagService.removeTag(keys[i])
     }
   }
  };

  changeTagValue(oldTagName:string,newTagName:string)
  {
    this.$tags.forEach(element => { element.forEach(element_child => { this.tag_map.set(element_child.$key,element_child.$value) });});
    let tagExist=false;
    let keys=Array.from(this.tag_map.keys())
    let values=Array.from(this.tag_map.values())
    let i=-1;

    for(let val of values)
    {
      i++;
      if (val==oldTagName)
      {
        this.tagService.changeTagValue(keys[i],newTagName)
      }
    }
   };

  }
    
    //this.tagService.removeTag(tagToRemove)
  

