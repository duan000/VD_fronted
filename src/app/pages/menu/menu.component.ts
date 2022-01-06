import { Component, OnInit } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }

  pageOneUrl: string = '/page/pageOne';
  topUrl: string = '/top';
  pageBuyUrl: string = '/page/buy';



  ngOnInit(): void {
  }

}
