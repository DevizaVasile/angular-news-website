import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Article} from "../article.model"
import {ArticleService} from "../article.service"
import {HomePageComponent} from '../home-page/home-page.component'

import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

import { FroalaEditorModule, FroalaViewModule, FroalaViewDirective, FroalaEditorDirective } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ArticleService]
})
export class PostComponent implements OnInit {

  $articleToDisplay;
  articleID:string;
  imgUrl:string;
  tags:String[];
  
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

  constructor(private route: ActivatedRoute, private location: Location,private articleService:ArticleService) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.articleID = urlParameters['id'];
    });  

    this.$articleToDisplay=this.articleService.getArticleByID(this.articleID);
    this.$articleToDisplay.subscribe( ($articleToDisplay) => 
      {
        console.log($articleToDisplay.content) 
        this.editorContent=$articleToDisplay.content
        this.imgUrl=$articleToDisplay.mainImgUrl
        this.tags=$articleToDisplay.tags.tagList
        console.log(this.tags)
      });
    


  }

}
