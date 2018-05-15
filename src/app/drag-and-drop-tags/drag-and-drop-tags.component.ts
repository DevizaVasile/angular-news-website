import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { DragAndDropServiceService  } from '../drag-and-drop-service.service'
import { TagsService } from '../tags.service'

import { FirebaseObjectObservable ,FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-drag-and-drop-tags',
  templateUrl: './drag-and-drop-tags.component.html',
  styleUrls: ['./drag-and-drop-tags.component.css'],
  providers: [TagsService]
})
export class DragAndDropTagsComponent implements OnInit {

  tags:any;
  listner:any;
  $tags:FirebaseListObservable<any[]>;
  tag_map:Map<String,String>=new Map();
  listBoxers: Array<String> = [];
  listTeamOne: Array<string> = []; 

  constructor(public dndService:DragAndDropServiceService,public tagsService:TagsService) { 
    
    this.tags=Observable.of(this.listTeamOne);
    this.listner=Observable.of(this.$tags)

    this.tags.subscribe(tagsList => 
      {
          dndService.setDndValues(tagsList)
      });

    this.listner.subscribe( (newList) => 
  {
    this.$tags=this.tagsService.getTags()
    this.$tags.forEach(element => { element.forEach(element_child => { this.tag_map.set(element_child.$key,element_child.$value) });
    let values=Array.from(this.tag_map.values())
    this.listBoxers=values;

  });
  })

    //this.updateValues()

    

  }

  ngOnInit() { 
  }


  updateValues()
  {
    this.$tags=this.tagsService.getTags()
    this.$tags.forEach(element => { element.forEach(element_child => { this.tag_map.set(element_child.$key,element_child.$value) });
  });

  }

  //listBoxers: Array<string> = ['a','b','c']
  

}
