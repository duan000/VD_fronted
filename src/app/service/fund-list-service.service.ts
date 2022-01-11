import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FundInfo } from '../common/Entity/FundInfo';

@Injectable({
  providedIn: 'root'
})

export class FundListServiceService {

  public retFundList: any[] = [];

  constructor(private httpClient:HttpClient) {

    let url = "http://localhost:8888/lki/loadCurrencyFundSearch";

    this.httpClient.get(url,{params:{status:0}})
      .subscribe((data:any) => {
        console.log(data);
        this.retFundList = data.data;
        console.log(this.retFundList);
      });
  }

}
