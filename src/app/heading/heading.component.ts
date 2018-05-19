import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs'; 
import { Subscription } from 'rxjs/Subscription';
import {Router} from "@angular/router"
import { FroalaEditorModule, FroalaViewModule, FroalaViewDirective, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  providers:[ArticleService]
})
export class HeadingComponent implements OnInit {

    public message: any;
    public message1Of4:any;
    public message2Of4:any;
    public message3Of4:any;
    public message4Of4:any;

    subscription: Subscription;
    subscription1Of4: Subscription;
    subscription2Of4: Subscription;
    subscription3Of4: Subscription;
    subscription4Of4: Subscription;

    public  article:Article=new Article("","","",[''],"","");
    public  article1Of4:Article=new Article("","","",[''],"","");
    public  article2Of4:Article=new Article("","","",[''],"","");
    public  article3Of4:Article=new Article("","","",[''],"","");
    public  article4Of4:Article=new Article("","","",[''],"","");

    public editorContent: string = ''
    public editorContent1Of4: string = ''
    public editorContent2Of4: string = ''
    public editorContent3Of4: string = ''
    public editorContent4Of4: string = ''

    public imgLen:number;
    public imgLen1Of4:number;
    public imgLen2Of4:number;
    public imgLen3Of4:number;
    public imgLen4Of4:number;


    articles:FirebaseListObservable<any>;

        //froala settings
        options: Object = {
          placeholderText: 'Edit Your Content Here!',
          charCounterCount: true,
          imageUpload: false,
          fileUpload: false,
          videoUpload: false,
          //enter: $.FroalaEditor.ENTER_BR
        }
       

  constructor(public artServ:ArticleService, public router:Router) {
    
      let articles = this.artServ.getArticles()

      //head
      this.subscription = this.artServ.itemRef.subscribe(message => {
      let id = message.value;
      this.message = id;
      
      articles.forEach(val=>{
        val.forEach(val_child=>{
          if (val_child.$key==this.message.trim())
          {
            this.article=new Article(val_child.title,val_child.mainImgUrl,val_child.content,val_child.tagsList,val_child.author,val_child.category);
            this.article.setDate(val_child.showDate)
            this.article.setShortText(val_child.shortText)
            this.article.setTitle(val_child.title)
            this.article.setTags(val_child.tags)
            this.article.setCategory(val_child.category)
            this.editorContent=val_child.shortText
          }
        })
      })
    })

    //1of4
    this.subscription1Of4 = this.artServ.itemRef1Of4.subscribe(message1Of4 =>{
      let id1Of4 = message1Of4.value;
      this.message1Of4 = id1Of4;

      articles.forEach(val=>{
        val.forEach(val_child=>{
          if (val_child.$key==this.message1Of4.trim())
          {
            this.article1Of4=new Article(val_child.title,val_child.mainImgUrl,val_child.content,val_child.tagsList,val_child.author,val_child.category);
            this.article1Of4.setDate(val_child.showDate)
            this.article1Of4.setShortText(val_child.shortText)
            this.article1Of4.setTitle(val_child.title)
            this.article1Of4.setTags(val_child.tags)
            this.article1Of4.setCategory(val_child.category)
            this.editorContent1Of4=val_child.shortText
            this.article1Of4.setMainImgUrl(val_child.mainImgUrl)
            this.imgLen1Of4=this.article1Of4.mainImgUrl.length
          }
        })
      })
    })

    //2of4
    this.subscription2Of4 = this.artServ.itemRef2Of4.subscribe(message2Of4 =>{
      let id2Of4 = message2Of4.value;
      this.message2Of4 = id2Of4;

      articles.forEach(val=>{
        val.forEach(val_child=>{
          if (val_child.$key==this.message2Of4.trim())
          {
            this.article2Of4=new Article(val_child.title,val_child.mainImgUrl,val_child.content,val_child.tagsList,val_child.author,val_child.category);
            this.article2Of4.setDate(val_child.showDate)
            this.article2Of4.setShortText(val_child.shortText)
            this.article2Of4.setTitle(val_child.title)
            this.article2Of4.setTags(val_child.tags)
            this.editorContent2Of4=val_child.shortText
            this.imgLen2Of4=this.article2Of4.mainImgUrl.length
          }
        })
      })
    })
   



  


    
    
     

   }

  ngOnInit() {
    
  }

  doSomth()
  {
    console.log(this.article.tags)
    console.log(this.article.tagsList)
  }

  headerRedirect()
  {
    this.router.navigate(['article',this.message.trim()])
  }

  header1Of4Redicerc()
  {
    this.router.navigate(['article',this.message1Of4.trim()])
  }

  header2Of4Redicerc()
  {
    this.router.navigate(['article',this.message2Of4.trim()])
  }

  header3Of4Redicerc()
  {
    this.router.navigate(['article',this.message3Of4.trim()])
  }

  header4Of4Redicerc()
  {
    this.router.navigate(['article',this.message4Of4.trim()])
  }

}
