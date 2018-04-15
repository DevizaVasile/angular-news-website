import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../article.model';
import { Tags } from '../tags.model'
import { HeadingComponent } from '../heading/heading.component'




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {



  art2:Article=new Article(2,"Adrian Năstase: Îmi cer scuze...","url2","content2",['t3,t4'])
  art1:Article=new Article(1,"Marian Vanghelie: Oamenii sunt șantajați în 90% din dosare","img3",'Marian Vanghelia a făcut declarații la Tribunalul București despre protocoale. În continuare suntem dornici să aflăm și celelalte protocoale. Să vedem ce ne zice doamna Stanciu după ce vedem protocolul, săvedem celelalte protocoale care există cu celelalte instituții. Cred că în România și în statul ala de drept adevărat, nu pe care au încercat unii să-l facă paralel, acești oameni trebuie să răspundă, dar nu cu denunțuri false și cu băgat oameni care să scrie de 2-3 ori denunțuri și cu luat oameni cu abuzuri dimineața la 5, la 6 din casă.. cum se întâmplă în toate dosarele, în proporție de 90%. Sunt șantajați oamenii ca să facă denunțuri. Trebuie ca oamenii să o ia încet-încet către Parchet și să de cu subsemnatul și să spună cum și-au permis să încalce Constituția României”, a spus Vanghelie.',['Statul paralel','Conspiratii']);
  articles:Article[]=[this.art1,this.art2];
  numbers=[1,2,3,4,5,6,7];

  constructor(private router: Router) {


   }

   clickedArticle(clickedArticle:Article)
   {
     this.router.navigate(['article',clickedArticle.id])
   }

  ngOnInit() {

  }


}
