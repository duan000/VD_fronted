import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BuyInfo } from '../common/Entity/BuyInfo';
import { FundInfo } from '../common/Entity/FundInfo';
import { SearchCondition } from '../common/Entity/SearchCondition';
import { SelectItem } from '../common/Entity/selectItem';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor() {
    this.searchCondition = new SearchCondition();
    this.itakushaOptions = [];
    this.fundClsc1Options = [];
    this.fundClsc2Options = [];
    this.fundClsc3Options = [];
    this.fundClsc1Name = "";
    this.fundClsc2Name = "";
    this.fundClsc3Name = "";
    this.searchResult = [];

    this.buyInfo = new BuyInfo();

    this.buyInfo1 = {};
   }

  searchCondition: SearchCondition;
  itakushaOptions: SelectItem[];
  fundClsc1Name: string;
  fundClsc2Name: string;
  fundClsc3Name: string;
  fundClsc1Options: SelectItem[];
  fundClsc2Options: SelectItem[];
  fundClsc3Options: SelectItem[];
  searchResult: any;

  buyInfo: BuyInfo;

  buyInfo1:any={};

}
