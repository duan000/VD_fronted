import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FundInfo } from '../common/Entity/FundInfo';

@Injectable({
  providedIn: 'root'
})

export class FundListServiceService {

  public retFundList: any[] = [];

  constructor(private httpClient:HttpClient) {

  }
  
  url = "http://localhost:8888/lki/loadCurrencyFundSearch";

  getFundList(){
    // const params = new HttpParams({ fromObject: param });
    return this.httpClient.get(this.url,{params:{status:0}})
    
  }

}
