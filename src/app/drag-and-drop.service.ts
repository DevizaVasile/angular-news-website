import { Injectable } from '@angular/core';

import {DragAndDropTagsComponent} from './drag-and-drop-tags/drag-and-drop-tags.component'


@Injectable()
export class DragAndDropService {

  constructor(private data:DragAndDropTagsComponent) { }

  getDataFromDragAndDrop()
  {
     console.log("nice service")
     console.log(this.data.get_tags())
  }

}
