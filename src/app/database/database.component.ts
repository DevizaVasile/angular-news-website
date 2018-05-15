import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service"
import { ArticleService } from "../article.service"
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import {Article} from '../article.model'
import 'rxjs/add/observable/of'; 
import {Observable} from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import {SelectionModel} from '@angular/cdk/collections'
import {MatSortModule} from '@angular/material/sort';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
  providers:[ArticleService,AuthServiceService]
})
export class DatabaseComponent implements OnInit {

  displayedColumns = ['title', 'author','id'];
  usr:any;

  itemList: Article[];
  dataSource = new MatTableDataSource(this.itemList);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  

  constructor(private authService:AuthServiceService,private articleService:ArticleService) { 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
  ngOnInit() {


    let data = this.articleService.getArticles()
    data.subscribe(item => {
        this.itemList = [];
        item.forEach(element => {
            this.itemList.push(element);
        });
    this.dataSource = new MatTableDataSource(this.itemList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });


    //this.dataSource = new ArticleDataSource(this.articleService,this.authService);
    //this.articles=this.articleService.getArticles()
    this.authService.user.subscribe(va => 
      {
      this.usr=this.authService.user.getValue()
      })
      const source = timer(2000);
      const subscribe = source.subscribe(val => 
      {  
      });   
  }

}


