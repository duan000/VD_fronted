import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { BasicPageComponent } from 'src/app/common/basicPage';
import {DataService} from 'src/app/service/data-service.service';

export interface PeriodicElement {
  name: string;
  info: any;
}

// const ELEMENT_DATA: PeriodicElement[] = [];


// const ELEMENT_DATA1: PeriodicElement[] = [];

@Component({
  selector: 'app-cpage2',
  templateUrl: './cpage2.component.html',
  styleUrls: ['./cpage2.component.scss']
})
export class Cpage2Component extends BasicPageComponent implements OnInit {

  dataSource: PeriodicElement[] = [];
  dataSource1 :PeriodicElement[] = [];

  // test:any[] =[];
  


  constructor(private service:DataService) { 
    super();
  }

  ngOnInit(): void {
    this.dataSource1 = this.service.dataList;
    this.dataSource = this.service.dataList1;
    // this.test = this.dataSource
    // console.log(this.test)
  }

  // add(){
    
  //   this.dataSource = this.service.dataList;
  //   // console.log(this.dataSource)
  //   this.test = this.dataSource
  //   console.log(this.test)
  //   // console.log(this)
  // }

}
