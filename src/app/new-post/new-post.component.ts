import { Component, OnInit } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';




@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  
  options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  }

  public editorContent: string = ''


  clickMessage = '';
  onClickMe() {
    this.clickMessage = this.editorContent;

  }

  constructor() { 

  }

  ngOnInit() {

  }

}
