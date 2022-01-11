import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPageComponent } from 'src/app/common/basicPage';
import { DataService } from 'src/app/service/data-service.service';

const data1:any={
  applicationDivision:"",
  applicationAmount:"",
  standardAmount:"",
  fixedAmount:"",
  commission:"",
  settlementAmount:"",
  applicationDate:"",
  tradeDate:"",
  deliveryDate:"",
  bankAccount:"",
  telephoneNumber:"",
  searchType:"success",
}

@Component({
  selector: 'app-cpage1',
  templateUrl: './cpage1.component.html',
  styleUrls: ['./cpage1.component.scss']
})
export class Cpage1Component extends BasicPageComponent implements OnInit {

  constructor(private router:Router,private service:DataService, private el: ElementRef){ 
    super();
  }

  public data:any = {};

  public data1:any = data1;

  public date!: Date;
  

  type:number = 1;

  

  ngOnInit(): void {

    this.date = new Date();

    this.data = this.service.data.data.details[0];

    this.data1.commission = this.data.commission;
    this.data1.tradeDate = this.data.tradeDate;
    this.data1.deliveryDate = this.data.deliveryDate;
    this.data1.telephoneNumber = this.data.telephoneNumber;


    console.log(this.data);
  }


  goto(){

    this.service.enter1(this.data1)
      .subscribe((data:any) => {   
        console.log(data)
        if(data.success){
          this.service.data2 = data.data;
          this.router.navigate(['/pages/cpage2'])
        }
      });

    
  }

  goBack(){
    this.router.navigate(['pages/cpage0']);
  }



}
