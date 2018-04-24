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

  constructor(private tagService:TagsService) { }

  ngOnInit() {

    this.$tags=this.tagService.getTags();

  }


  addTag(newTag:string)
  { 
    this.tagService.addTag(newTag)
  }

  removeTag(tagToRemove:string)
  {
    this.$tags.forEach(element => { element.forEach(element_child => 
      {
      console.log(element_child.$key)
      console.log(element_child.$value)
      });  
                                  });
  };
    
    
    
    //this.tagService.removeTag(tagToRemove)
  }

