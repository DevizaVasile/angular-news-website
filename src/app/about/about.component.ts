import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  logo:string;

  constructor() {
    this.logo='assets/img/IESC_logo.png'
  }

  ngOnInit() {
  }

}
