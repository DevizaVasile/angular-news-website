import { Injectable } from '@angular/core';

import {DragAndDropTagsComponent} from './drag-and-drop-tags/drag-and-drop-tags.component'

@Injectable()
export class DragAndDropServiceService {



  constructor() { }

  private dndValues;

  setDndValues(values)
  {
    this.dndValues=values;
  }

  getDndValues()
  {
    return this.dndValues;
  }

}
