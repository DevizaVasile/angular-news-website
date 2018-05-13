/*

Main class for creating articles and storing them.

Work as template for creating articles by administrator of the site.


title : Title of the article.

mainImgUrl : All articles should have at least one image, this variable stores the url path to the img file.

content : All text will be stored in this variable.

tagsList : Contains all tags for this article .

date : Date then the article was writen.

showDate : Date to display.


 */

import { Tags } from './tags.model'

export class Article {

    public shortText:string;
    public tags:Tags;
    public date:string;
    public showDate:string;
    public $key:string;
    

    constructor(public title:string , public mainImgUrl:string , public content:string, public tagsList:string[])
    {  
        // generates text for theading  
        // majority of publication uses 30 words as short description
        //in headings.
        let dateObject = new Date()

        let words = content.split(' ');
        let contentLengt = words.length

        if (contentLengt > 30 )
            {
                words = words.slice(0,30);
                this.shortText = words.join(" ");
            }
        else
            {
                this.shortText=this.content;
            }

        this.tags = new Tags(this.tagsList);

        //getting date then article was writed
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            this.date=dateObject.getFullYear()+" "+dateObject.getMonth()+" "+dateObject.getDate();

            this.showDate=dateObject.getFullYear()+" "+month[dateObject.getMonth()]+" "+dateObject.getDate();
            
     };


     //Getters

     public getTitle()
     {
         return this.title;
     }

     public getMainImgUrl()
     {
         return this.mainImgUrl;
     }

     public getContent()
     {
         return this.content;
     }

     public getShortText()
     {
         return this.shortText;
     }

     public getTags()
     {
         return this.tags
    }

     public getDate()
     {
         return this.date
     }

     public getShowDate()
     {
         return this.showDate;
     }


     //Setters

     public setTitle(newTitle:string)
     {
        this.title=newTitle;

     }

     public setMainImgUrl(newMainImgUrl:string)
     {
        this.mainImgUrl=newMainImgUrl;
     }

     public setContent(newContent:string)
     {
        this.content=newContent;
     }

     public setShortText(newShortText:string)
     {
         this.shortText=newShortText;
     }

     public addTag(newTag:string)
     {
        this.tags.addTag(newTag);
     }

     public removeTag(toRemoveTag:string)
     {
         this.tags.removeTag(toRemoveTag);
     }

     //please use the following format (YYYY MM DD)
     public setDate(newDate:string)
     {
         this.showDate=newDate;
     }




}
