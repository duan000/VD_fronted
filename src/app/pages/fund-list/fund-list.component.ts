import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FundListServiceService } from 'src/app/service/fund-list-service.service';
import { BasicPageComponent } from 'src/app/common/basicPage';
import { SearchCondition } from 'src/app/common/Entity/SearchCondition';
import { SelectItem } from 'src/app/common/Entity/SelectItem';
import { BuyService } from 'src/app/service/buy.service';
import { FundInfo } from 'src/app/common/Entity/FundInfo';


@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})

export class FundListComponent extends BasicPageComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  service: BuyService;
  fundClsc1Name: string;
  fundClsc2Name: string;
  fundClsc3Name: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fundListService: FundListServiceService,
    private buyService: BuyService
  ) {
    super();
    // 初期化
    this.fundClsc1Name = "";
    this.fundClsc2Name = "";
    this.fundClsc3Name = "";
    this.service = buyService;
  }

  elementData: FundInfo[] = [];
  // fund列表
  displayedColumns: string[] = ['index', 'fundName', 'itakuKaishaName', 'kijunKakaku', 'zenjituhi', 'tesuryo', 'operation'];
  dataSource: any;
  searchResult: any = [];

  ngOnInit() {

    console.log("ngOnInit()");
    this.service.searchCondition.sort = '1'
    
    this.fundListService.getFundList().subscribe((ret: any) => {
      console.log(ret.data);
      this.elementData = ret.data;
      this.searchResult = new MatTableDataSource<FundInfo>(this.elementData);
      this.searchResult.paginator = this.paginator;
    })

    // 検索条件エリア設定
    this.generatePage();
    console.log("this.service.searchResult:[" + this.service.searchResult.length + "]");
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = '数/ページ：'
  }

  private generatePage() {
    // 委託会社
    let select1: SelectItem = new SelectItem();
    let select2: SelectItem = new SelectItem();

    select1.value = "委託会社No.1";
    select1.code = "KS001"
    select2.value = "委託会社NO.2";
    select2.code = "KS002"
    this.service.itakushaOptions = [select1, select2];

    this.fundClsc1Name = "投資対象";
    this.fundClsc2Name = "リスク";
    this.fundClsc3Name = "决算回数";

    // ファンド分類１
    let selectFundA1: SelectItem = new SelectItem();
    let selectFundA2: SelectItem = new SelectItem();
    selectFundA1.value = "金融資産A";
    selectFundA1.code = "FC1001";
    selectFundA2.value = "金融資産B";
    selectFundA2.code = "FC1002";
    this.service.fundClsc1Options = [selectFundA1, selectFundA2];

    // ファンド分類２
    let selectFundB1: SelectItem = new SelectItem();
    let selectFundB2: SelectItem = new SelectItem();
    selectFundB1.value = "リスク高い";
    selectFundB1.code = "FC2001";
    selectFundB2.value = "リスク低い";
    selectFundB2.code = "FC2002";
    this.service.fundClsc2Options = [selectFundB1, selectFundB2];

    // ファンド分類３
    let selectFundC1: SelectItem = new SelectItem();
    let selectFundC2: SelectItem = new SelectItem();
    selectFundC1.value = "１回決算";
    selectFundC1.code = "FC3001";
    selectFundC2.value = "２回決算";
    selectFundC2.code = "FC3002";
    this.service.fundClsc3Options = [selectFundC1, selectFundC2];
  }

  //　Form Validators
  // 全角文字を入力
  fundNamePattern = "\[\^\\x20-\\x7E\]\*"
  fundNameFormControl = new FormControl('', [
    Validators.pattern(this.fundNamePattern)
  ]);

  forwordPage() {
    this.router.navigate(['/pages/customCard'])
  }

  buyFund(fundInfo: any) {

    console.log(fundInfo);

    this.service.buyInfo1 = fundInfo;

    console.log(this.service.buyInfo1);

    this.router.navigate(['/pages/cpage0'])
  }

  search() {

    // 仮判定
    if (this.service.searchCondition.fundName) {

      this.errorMsg = "明細データがございません。条件を直して再度検索してください";
      this.searchResult = undefined;
      this.paginator.length = 0;
      this.scrollToTop();

    } else {

      this.errorMsg = "";

      this.fundListService.getFundList().subscribe((ret: any) => {
        this.elementData = ret.data;
        this.searchResult = new MatTableDataSource<FundInfo>(this.elementData);
        this.searchResult.paginator = this.paginator;
        console.log(this.paginator);
        
      })
      console.log(this.searchResult.data);

    }

  }

}