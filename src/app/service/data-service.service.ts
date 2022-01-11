import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  public data:any = {};

  public data2:any = {};

  enter(input:object){

    let url = "http://localhost:8888/lki/loadCurrencyPurchaseFundInput";

    let header: HttpHeaders = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

    const httpOptions = {
      headers: header
    };

    return this.httpClient.post(url,input,httpOptions);    
  }

  enter1(input:object){
    console.log(input);

    let url = "http://localhost:8888/lki/loadCurrencyPurchaseFundConfirm";

    let header: HttpHeaders = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

    const httpOptions = {
      headers: header
    };

    return this.httpClient.post(url,input,httpOptions);    
  }
  

}
