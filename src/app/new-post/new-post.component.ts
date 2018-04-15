import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { FroalaEditorModule, FroalaViewModule, FroalaViewDirective, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})


export class NewPostComponent implements OnInit {

  openDialog() {
    let self=this.editorContent;
    this.dialog.open(NewPostPreviewComponent,{data:{self}});
  }

  
  options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  }

  public editorContent: string = ''


  clickMessage = '';
  onClickMe() {
    this.clickMessage = this.editorContent;
    console.log(this.clickMessage)

  }

  constructor(public dialog: MatDialog) { 

  }
  
  ngOnInit() {

  }

}


@Component({
  selector:"post-preview",
  template: "<div [innerHTML]='data.self'></div>"
})
export class NewPostPreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
