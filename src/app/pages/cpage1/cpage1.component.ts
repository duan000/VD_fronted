// import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPageComponent } from 'src/app/common/basicPage';
import { DataService } from 'src/app/service/data-service.service';


export interface PeriodicElement {
  name: string;
  info: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {name: '取引区分', info: '购入'},
  // // {name: '取引区分', info: ['1','2']},
  // {name: '申请金额', info: '1000 元'},
  // {name: '基准面额', info: '2022年3月30日'},
  // {name: '约定金额/口数', info: '1000元(约定口数：11.036口)'},
  // {name: '税收手数', info: '0元'},
  // {name: '结算金额', info: '10000元'},
  // {name: '申请日', info: '2022年3月31日'},
  // {name: '约定日', info: '2022年4月1日'},
  // {name: '受理日', info: '2022年4月4日'},
  // {name: '经济口座记号-番号', info: '32200-32200001'},
  // {name: '日中联络电话番号', info: '03-0000-3121'},
];

const ELEMENT_DATA1: PeriodicElement[] = [
  // {name: '受付番号', info: '0000001467'},
  // {name: '受付日期', info: '2022年3月31日 13时51分'},
  // {name: '状态', info: '受付中'},
];

@Component({
  selector: 'app-cpage1',
  templateUrl: './cpage1.component.html',
  styleUrls: ['./cpage1.component.scss']
})
export class Cpage1Component extends BasicPageComponent implements OnInit {

  constructor(private router:Router,private service:DataService, private el: ElementRef){ 
    super();
  }

  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;

  type:number = 1;

  

  ngOnInit(): void {
    this.dataSource = this.service.dataList;
    this.dataSource1 = this.service.dataList1;
    console.log(this.service.dataList)
  }


  goto(){
    this.router.navigate(['/pages/cpage2'])
  }

  goBack(){
    this.router.navigate(['pages/cpage0']);
  }



}
