/*

Main class for creating articles and storing them.

Work as template for creating articles by administrator of the site.


title : Title of the article.

mainImgUrl : All articles should have at least one image, this variable stores the url path to the img file.

content : All text will be stored in this variable.


 */

import { Tags } from './tags.model'

export class Article {

    public shortText:string;

    constructor( public title:string , public mainImgUrl:string , public content:string, public tags:Tags )
    {  
        // generates text for theading  
        // majority of publication uses 30 words as short description
        //in headings.


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
     };


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


}
