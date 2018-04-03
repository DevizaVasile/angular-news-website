import { Component, OnInit } from '@angular/core';

import { Article } from '../article.model';
import { Tags } from '../tags.model'
import { HeadingComponent } from '../heading/heading.component'




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {








  constructor() {

    var art1:Article=new Article("title","url","content",['t1','t2']);


   }

  ngOnInit() {

  }


}
