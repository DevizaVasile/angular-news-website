import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { DragAndDropServiceService  } from '../drag-and-drop-service.service'

@Component({
  selector: 'app-drag-and-drop-tags',
  templateUrl: './drag-and-drop-tags.component.html',
  styleUrls: ['./drag-and-drop-tags.component.css']
})
export class DragAndDropTagsComponent implements OnInit {

  tags:any;

  constructor(public dndService:DragAndDropServiceService) { 
    this.tags=Observable.of(this.listTeamOne);
    this.tags.subscribe(tagsList => this.listTeamOne)
    this.tags.subscribe(tagsList => 
      {
          dndService.setDndValues(tagsList)
      });
  }

  ngOnInit() {
  }


  listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = []; 

  
  
  

  //nums = Observable.of(this.listTeamOne);
  



 // getData()
 // {
 //   this.nums.subscribe(num => this.listTeamOne )
 //   console.log(this.tags.value);
 // }

}
