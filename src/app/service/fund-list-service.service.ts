import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FundInfo } from '../common/Entity/FundInfo';

const ELEMENT_DATA: any[] = [
  { index: 1, fundCd: 'F001', fundName: '野村株式A', itakuKaishaName: '委託会社１', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 2, fundCd: 'F002', fundName: '野村株式B', itakuKaishaName: '委託会社１', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
  { index: 3, fundCd: 'F003', fundName: '野村株式C', itakuKaishaName: '委託会社１', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 4, fundCd: 'F004', fundName: '野村株式D', itakuKaishaName: '委託会社１', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
  { index: 5, fundCd: 'F005', fundName: '野村株式E', itakuKaishaName: '委託会社１', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 6, fundCd: 'F006', fundName: '野村株式F', itakuKaishaName: '委託会社１', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
  { index: 7, fundCd: 'F007', fundName: '野村株式G', itakuKaishaName: '委託会社２', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 8, fundCd: 'F008', fundName: '野村株式H', itakuKaishaName: '委託会社２', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
  { index: 9, fundCd: 'F009', fundName: '野村株式I', itakuKaishaName: '委託会社２', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 10, fundCd: 'F010', fundName: '野村株式J', itakuKaishaName: '委託会社２', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
  { index: 11, fundCd: 'F011', fundName: '野村株式K', itakuKaishaName: '委託会社２', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 12, fundCd: 'F012', fundName: '野村株式L', itakuKaishaName: '委託会社２', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
];

const ELEMENT_DATA1: FundInfo[] = [
  { index: 1, fundCd: 'F001', fundName: '野村株式A', itakuKaishaName: '委託会社１', kijunKakaku: 4500, zenjituhi: -200, zenjituhiRitu: -15, tesuryo: 120 ,operation: 1},
  { index: 2, fundCd: 'F002', fundName: '野村株式B', itakuKaishaName: '委託会社１', kijunKakaku: 3500, zenjituhi: 130, zenjituhiRitu: 20, tesuryo: 133 ,operation: 1},
]


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


  // public retFundList: any[] = ELEMENT_DATA;
  // public retFundList: any[] = this.dataList;

  public retFundList1: any[] = ELEMENT_DATA1;

}
