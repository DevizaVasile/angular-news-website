import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { FroalaEditorModule, FroalaViewModule, FroalaViewDirective, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import {DragAndDropService} from '../drag-and-drop.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers:[DragAndDropService]
})

export class NewPostComponent implements OnInit {


  options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    imageUpload: false,
    fileUpload: false,
    videoUpload: false,
    //enter: $.FroalaEditor.ENTER_BR
  }

  public editorContent: string = ''


  getData(event)
  {
    console.log("OK")
    //console.log(this.dragAndDropValues.getDataFromDragAndDrop());
    this.dragAndDropValues.getDataFromDragAndDrop()
  }

                                                      //public dragAndDropValues:DragAndDropService
  constructor(private sanitizer: DomSanitizer,public dragAndDropValues:DragAndDropService) { 
  }
  
  ngOnInit() {
  }


}





