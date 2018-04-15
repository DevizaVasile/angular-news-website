import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Article} from "../article.model"

import {HomePageComponent} from '../home-page/home-page.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number = null;
  article:Article=new Article(this.id,"Marian Vanghelie: Oamenii sunt șantajați în 90% din dosare","img3",'Marian Vanghelia a făcut declarații la Tribunalul București despre protocoale. În continuare suntem dornici să aflăm și celelalte protocoale. Să vedem ce ne zice doamna Stanciu după ce vedem protocolul, săvedem celelalte protocoale care există cu celelalte instituții. Cred că în România și în statul ala de drept adevărat, nu pe care au încercat unii să-l facă paralel, acești oameni trebuie să răspundă, dar nu cu denunțuri false și cu băgat oameni care să scrie de 2-3 ori denunțuri și cu luat oameni cu abuzuri dimineața la 5, la 6 din casă.. cum se întâmplă în toate dosarele, în proporție de 90%. Sunt șantajați oamenii ca să facă denunțuri. Trebuie ca oamenii să o ia încet-încet către Parchet și să de cu subsemnatul și să spună cum și-au permis să încalce Constituția României”, a spus Vanghelie.',['Statul paralel','Conspiratii']);
  tagArray:String[]=new Array();

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = parseInt(urlParameters['id']);
    });  

    let s:string;
    for(s in this.article.tagsList)
    {
      this.tagArray.push(this.article.tagsList[s]);
    }

  }

}
