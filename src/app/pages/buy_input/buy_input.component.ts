import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from 'src/app/service/buy.service';
import { DataService } from 'src/app/service/data-service.service';


const ELEMENT_DATA1 = {
  NSAAvailableGold:"",
  transactionDivision:"",
  basePrice: "",
  RatioTheDayBefore:"",
  Time:"",
  BankAccount:"",
  Amount:"",
  phoneNumber1:"",
  phoneNumber2:"",
  phoneNumber3:"",

  state:true,
}
  

@Component({
  selector: 'app-buy-input',
  templateUrl: './buy_input.component.html',
  styleUrls: ['./buy_input.component.scss']
})

export class BuyInputComponent implements OnInit {

  constructor(private router:Router,private service:DataService,private service1:BuyService) { }

  dataSource1 = ELEMENT_DATA1;

  public check:boolean = false;

  public unit:string="0";

  public state:boolean = true;

  ngOnInit(): void {

    this.dataSource1.basePrice = this.service1.buyInfo1.basePrice;

    console.log(this.dataSource1);
  }

  goto(){
    
    if (!this.check){
      alert("投資信託説明書が選択されていません!");
      return;
    }
    if (this.dataSource1.transactionDivision == ""){
      alert("取引区分が選択されていません!");
      return;
    }
    if (this.dataSource1.Amount == ""){
      alert("金額は空にできません!");
      return;
    }
    if (this.dataSource1.phoneNumber1 == "" || this.dataSource1.phoneNumber2 == "" || this.dataSource1.phoneNumber3 == ""){
      alert("電話番号を正しく記入してください。");
      return;
    }

    let num = /^[0-9]{2,4}$/;
    if(!num.test(this.dataSource1.phoneNumber1) || !num.test(this.dataSource1.phoneNumber2) || !num.test(this.dataSource1.phoneNumber3)){
      alert("電話番号を正しく記入してください。");
      return;
    }

    this.service.enter(this.dataSource1)
      .subscribe((data:any) => {   
        if(data.success){
          this.service.data = data.data;
          this.router.navigate(['/pages/cpage1']);
        }
      });
    
  }

  goback() {
    this.router.navigate(['/pages/fundList']);
  }

  setState(){
    this.state = false;
  }

}


// export class CardOverviewExample {}
