import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FundInfo } from '../common/Entity/FundInfo';

@Injectable({
  providedIn: 'root'
})

export class FundListServiceService {

  public retFundList: any[] = [];

  constructor(private httpClient: HttpClient) {

  }

  url = "http://localhost:8888/lki/loadCurrencyFundSearch";

  getFundList() {

    // // 方式一：链式语法，set不能分开写
    // const param = new HttpParams().set('param1','1').set('param2','2')

    // 方式二： fromString
    // const param = new HttpParams({ fromString: " 'param1'='1' & 'param2'='2' " })

    // 方式二： fromObject
    const param = new HttpParams({ fromObject: {'param1':'1','param2':'2'} });

    this.httpClient.get(this.url,{params:param})

    // const params = new HttpParams({ fromObject: param });
    return this.httpClient.get(this.url, { params: { status: 0 } })

  }



}
