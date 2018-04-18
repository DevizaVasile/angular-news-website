import { Component, OnInit } from '@angular/core';
import {DragAndDropService} from '../drag-and-drop.service'

@Component({
  selector: 'app-drag-and-drop-tags',
  templateUrl: './drag-and-drop-tags.component.html',
  styleUrls: ['./drag-and-drop-tags.component.css']
})
export class DragAndDropTagsComponent implements OnInit {

  constructor(public dragAndDropValue:DragAndDropService) { }

  ngOnInit() {
  }

  listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = [];

  public get_tags()
  {
    return this.listTeamOne;
  }

}
