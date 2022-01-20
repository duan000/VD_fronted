import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from 'src/app/service/buy.service';
import { DataService } from 'src/app/service/data-service.service';


const ELEMENT_DATA1 = {
  fundName: '',
  fundDiv: '',
  NSAAvailableGold: "2000",
  transactionDivision: "",
  basePrice: "0",
  RatioTheDayBefore: "89.0%",
  Time: new Date,
  BankAccount: "00001",
  Amount: "",
  phoneNumber1: "",
  phoneNumber2: "",
  phoneNumber3: "",

  state: true,
}


@Component({
  selector: 'app-buy-input',
  templateUrl: './buy_input.component.html',
  styleUrls: ['./buy_input.component.scss']
})

export class BuyInputComponent implements OnInit {

  constructor(private router: Router, private service: DataService, private service1: BuyService) { }

  dataSource1 = ELEMENT_DATA1;

  public check: boolean = false;

  public unit: string = "0";

  public state: boolean = true;

  public expression: boolean = false;

  public expression1: boolean = false;


  ngOnInit(): void {
    this.dataSource1.fundDiv = this.service1.buyInfo1.fundDiv;
    this.dataSource1.basePrice = this.service1.buyInfo1.fundDiv == 0 ? this.service1.buyInfo1.netAssetValue : this.service1.buyInfo1.basePrice;
    this.dataSource1.fundName = this.service1.buyInfo1.fundName;
    const date = new Date();
    this.dataSource1.Time = date;

    console.log(this.dataSource1);
  }

  // ボタン制御 
  isShow: boolean = false;
  checkboxValue = '';
  watchValue() {
    console.log('11');
    if (!(this.checkboxValue === '' || this.dataSource1.transactionDivision === '' ||
      this.dataSource1.Amount === '' || this.dataSource1.phoneNumber1 === '' ||
      this.dataSource1.phoneNumber2 === '' || this.dataSource1.phoneNumber3 === '')) {
      this.isShow = true
    } else {
      this.isShow = false
    }
  }


  goto() {

    // if (!this.check){
    //   alert("投資信託説明書が選択されていません!");
    //   return;
    // }

    if (this.dataSource1.transactionDivision == "") {
      alert("取引区分が選択されていません!");
      return;
    }
    if (this.dataSource1.Amount == "") {
      alert("金額は空にできません!");
      return;
    }
    if (this.dataSource1.phoneNumber1 == "" || this.dataSource1.phoneNumber2 == "" || this.dataSource1.phoneNumber3 == "") {
      alert("電話番号を正しく記入してください。");
      return;
    }

    // let num = /^[0-9]{2,4}$/;
    // if(!num.test(this.dataSource1.phoneNumber1) || !num.test(this.dataSource1.phoneNumber2) || !num.test(this.dataSource1.phoneNumber3)){
    //   alert("電話番号を正しく記入してください。");
    //   return;
    // }

    this.service.enter(this.dataSource1)
      .subscribe((data: any) => {
        console.log('前画面遷移データ', this.dataSource1);

        if (data.success) {
          this.service.data = data.data;
          console.log('入力確認レスポンシブデータ', this.service.data);
          this.router.navigate(['/pages/cpage1']);
        }
      });

  }

  goback() {
    this.router.navigate(['/pages/fundList']);
  }

  setState() {
    this.state = false;
  }

  amountCheck() {
    // let num = /^[0-9]{1,8}$/;
    // if(!num.test(this.dataSource1.Amount)){
    //   this.dataSource1.Amount = "";
    //   this.expression1 = true;
    //   return;
    // }else{
    //   this.expression1 = false;
    // }

    if (Number(this.dataSource1.Amount) < 0) {
      this.dataSource1.Amount = "";
      this.expression1 = true;
      return;
    } else {
      this.expression1 = false;
    }
  }

  phoneNumCherk(phoneNumber: string, type: string) {
    let num = /^[0-9]{1,4}$/;
    if (!num.test(phoneNumber)) {
      switch (type) {
        case "phoneNumber1":
          this.dataSource1.phoneNumber1 = "";
          this.expression = true;
          return;
        case "phoneNumber2":
          this.dataSource1.phoneNumber2 = "";
          this.expression = true;
          return;
        case "phoneNumber3":
          this.dataSource1.phoneNumber3 = "";
          this.expression = true;
          return;
      }
    } else {
      this.expression = false;
    }

  }

  // phoneNumCherk1(){
  //   let num = /^[0-9]{1,4}$/;
  //   if(!num.test(this.dataSource1.phoneNumber1)){
  //     this.dataSource1.phoneNumber1 = "";
  //     this.expression = true;
  //     return;
  //   }else{
  //     this.expression = false;
  //   }

  // }

  // phoneNumCherk2(){
  //   let num = /^[0-9]{1,4}$/;

  //   if(!num.test(this.dataSource1.phoneNumber2)){
  //     this.dataSource1.phoneNumber2 = "";
  //     this.expression = true;
  //     return;
  //   }else{
  //     this.expression = false;
  //   }

  // }
  // phoneNumCherk3(){
  //   let num = /^[0-9]{1,4}$/;

  //   if(!num.test(this.dataSource1.phoneNumber3)){
  //     this.dataSource1.phoneNumber3 = "";
  //     this.expression = true;
  //     return;
  //   }else{
  //     this.expression = false;
  //   }

  // }

}


// export class CardOverviewExample {}
