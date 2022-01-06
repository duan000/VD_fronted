import { Injectable } from '@angular/core';

export interface PeriodicElement {
  index1: boolean;
  index2: string;
  index3: string;
  index4: string;
  index5: string;
  index6: string;
  index7: string;
  index8: string;
  index9: string;
  index10: string;
  index11: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    index1: false,
    index2: '800000元(前xxxxxxx)',
    index3: '',
    index4: '9061元',
    index5: '-270元',
    index6: '15:00',
    index7: '32200-32200001',
    index8: '',
    index9: '',
    index10: '',
    index11: '',
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data1 = ELEMENT_DATA;

  public dataList = [
    {name: '取引区分', info: this.data1[0].index3},
    {name: '申请金额', info: '1000 元'},
    {name: '基准面额', info: '2022年3月30日'},
    {name: '约定金额/口数', info: '1000元(约定口数：11.036口)'},
    {name: '税收手数', info: '0元'},
    {name: '结算金额', info: '10000元'},
    {name: '申请日', info: '2022年3月31日'},
    {name: '约定日', info: '2022年4月1日'},
    {name: '受理日', info: '2022年4月4日'},
    {name: '经济口座记号-番号', info: this.data1[0].index8},
    {name: '日中联络电话番号', info: this.data1[0].index9 + '-' + this.data1[0].index10 + '-' + this.data1[0].index11},
  ]

  public dataList1 = [
    {name: '受付番号', info: '0000001467'},
    {name: '受付日期', info: '2022年3月31日 13时51分'},
    {name: '状态', info: '受付中'},
  ]

}
