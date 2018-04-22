import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { FroalaEditorModule, FroalaViewModule, FroalaViewDirective, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgModule} from '@angular/core';

import {DragAndDropServiceService} from '../drag-and-drop-service.service'
import {Article} from '../article.model'
import {ArticleService} from '../article.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [DragAndDropServiceService, ArticleService]

})

export class NewPostComponent implements OnInit {

  //title of the article
  title:string="";
  imgUrl:string="";
  article:Article;



  //froala settings
  options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    imageUpload: false,
    fileUpload: false,
    videoUpload: false,
    //enter: $.FroalaEditor.ENTER_BR
  }
  public editorContent: string = ''


  //get tags from drag and drop component

  getData(event)
  {
    let ready=false;
    let msg:String="";
    //console.log(this.dndService.getDndValues());
   // console.log(this.title);
   // console.log(this.editorContent);
   // console.log(this.imgUrl);

    if ( this.title.length < 10 )
    {
       msg="Title is too short."
    }

    if ( this.imgUrl.length == 0 )
    {
      msg="Please use an image. "+msg;
    }

    if (this.editorContent.length < 10 )
    {
      msg="Article si too short. "+msg;
    }

    if (this.dndService.getDndValues().length == 0)
    {
        msg="Please add at least one tag. "+msg;
    }

    if (msg.length==0)
    {
      msg="Succes."
      ready=true;
    }

    if(ready==true)
    {
      console.log("article was pushed to database")
     var newArticle=new Article(this.title,this.imgUrl,this.editorContent,this.dndService.getDndValues())
     this.articleService.addArticle(newArticle)
     window.location.reload();
    }
    else
    {
      console.log(msg)
    }


  }

  constructor(private sanitizer: DomSanitizer, private dndService:DragAndDropServiceService,private articleService:ArticleService) { 
    
  }
  
  ngOnInit() {

  }


}





