import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPageComponent } from 'src/app/common/basicPage';
import { DataService } from 'src/app/service/data-service.service';

const data1: any = {
  fundName: '',
  applicationDivision: "",
  applicationAmount: "0",
  standardAmount: "0",
  fixedAmount: "0",
  commission: "0",
  settlementAmount: "0",
  applicationDate: "",
  tradeDate: "",
  deliveryDate: "",
  bankAccount: "",
  telephoneNumber: "",
  searchType: "success",

  // temp
  state: true
}

@Component({
  selector: 'app-cpage1',
  templateUrl: './cpage1.component.html',
  styleUrls: ['./cpage1.component.scss']
})
export class Cpage1Component extends BasicPageComponent implements OnInit {

  constructor(private router: Router, private service: DataService, private el: ElementRef) {
    super();
  }

  public data: any = {};

  public data1: any = data1;

  public date!: Date;

  type: number = 1;

  ngOnInit(): void {

    this.date = new Date();
    this.data = this.service.data.data.details[0];

    this.data1.applicationDivision = '購入';
    this.data1.applicationAmount = '1000';
    this.data1.standardAmount = '2000';
    this.data1.fixedAmount = '3000';
    this.data1.settlementAmount = '5000';
    this.data1.applicationDate = '2022-01-05';
    this.data1.bankAccount = '00001';

  }

  goto() {

    this.data1.state = true;

    this.service.enter1(this.data1)
      .subscribe((data: any) => {
        console.log(this.data1);
        console.log('确认响应data', data)
        if (data.success) {
          this.service.data2 = data.data;
          this.router.navigate(['/pages/cpage2'])
        }
      });


  }

  goBack() {
    this.router.navigate(['pages/cpage0']);
  }

}
