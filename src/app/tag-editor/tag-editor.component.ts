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
 
  $cats:FirebaseListObservable<any[]>;
  cat_map:Map<String,String>=new Map();

  constructor(private tagService:TagsService) { }

  ngOnInit() {

    this.$tags=this.tagService.getTags();
    this.$cats=this.tagService.getCats();

  }


  addTag(newTag:string)
  { 
    this.tag_map.clear()
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
    this.tag_map.clear()
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
    this.tag_map.clear()
    this.$tags.forEach(element => { element.forEach(element_child => { this.tag_map.set(element_child.$key,element_child.$value) });});
    let tagExist=false;
    let keys=Array.from(this.tag_map.keys())
    let values=Array.from(this.tag_map.values())
    let i=-1;

    for(let val of values)
    {
      if(val==newTagName)
      {
        tagExist=true;
      }
    }

    for(let val of values)
    {
      i++;
      if (val==oldTagName && tagExist==false)
      {
        this.tagService.changeTagValue(keys[i],newTagName)
      }
    }
   };

  
  
  
   addCat(newCat:string)
   { 
     this.cat_map.clear()
     this.$cats.forEach(element => { element.forEach(element_child => { this.cat_map.set(element_child.$key,element_child.$value) });});
     if (newCat.length>0)
     {
       let catExist=false;
       let keys=Array.from(this.cat_map.keys())
       let values=Array.from(this.cat_map.values())
       let i=-1;
 
       for(let val of values)
       {
         i++;
         if (val==newCat)
         {
          catExist=true;
           console.log("Cat Exist")
         }
       }
       if (!catExist)
       {
         this.tagService.addCat(newCat)
       }
     }
   }
  
   removeCat(catToRemove:string)
   {
    this.cat_map.clear()
     //iterate through all elements and generate an new map
     this.$cats.forEach(element => { element.forEach(element_child => { this.cat_map.set(element_child.$key,element_child.$value) });});
    
    let catExist=false;
    let keys=Array.from(this.cat_map.keys())
    let values=Array.from(this.cat_map.values())
    let i=-1;
 
    for(let val of values)
    {
      i++;
      if (val==catToRemove)
      {
        this.tagService.removeCat(keys[i])
      }
    }
   };
  
  
   changeCatValue(oldCatName:string,newCatName:string)
   {
    this.cat_map.clear()
     this.$cats.forEach(element => { element.forEach(element_child => { this.cat_map.set(element_child.$key,element_child.$value) });});
     let catExist=false;
     let keys=Array.from(this.cat_map.keys())
     let values=Array.from(this.cat_map.values())
     let i=-1;

     for(let val of values)
     {
       if(val==newCatName)
       {
         catExist=true;
       }
     }
 
     for(let val of values)
     {
       i++;
       if (val==oldCatName && catExist==false)
       {
         this.tagService.changeCatValue(keys[i],newCatName)
       }
     }



    };
  
  
  
  
  
  
  
  
  
  
  
  }
    
    //this.tagService.removeTag(tagToRemove)
  

