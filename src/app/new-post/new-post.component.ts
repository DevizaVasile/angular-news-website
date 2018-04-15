import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { FroalaEditorModule, FroalaViewModule, FroalaViewDirective, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  
  openDialog() {
    this.trustedEditorContent=this.sanitizer.bypassSecurityTrustHtml(this.editorContent);
    let self=this.trustedEditorContent;
    this.dialog.open(NewPostPreviewComponent,{data:{self}});
  }

  
  options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    inlineStiles:true
  }

  public editorContent: string = ''
  public trustedEditorContent;


  clickMessage = '';
  onClickMe() {
    this.clickMessage = this.editorContent;
    this.trustedEditorContent=this.sanitizer.bypassSecurityTrustHtml(this.editorContent);
    console.log(this.trustedEditorContent)

  }

  constructor(public dialog: MatDialog,private sanitizer: DomSanitizer) { 
  }
  
  ngOnInit() {

  }

}


@Component({
  selector:"post-preview",
  template: "<div [innerHTML]='data.self'></div>"
})
export class NewPostPreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private sanitizer:DomSanitizer) {
  }
}



