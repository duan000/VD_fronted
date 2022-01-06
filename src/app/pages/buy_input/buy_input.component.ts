import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';

export interface PeriodicElement {
  index1: boolean;
  index2: string;
  index3: string;
  index4: string;
  index5: string;
  index6: string;
  index7: string;
  index8: string;
  index9: string;
  index10: string;
  index11: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    index1: false,
    index2: '800000元(前xxxxxxx)',
    index3: '0',
    index4: '9061元',
    index5: '-270元',
    index6: '15:00',
    index7: '32200-32200001',
    index8: '',
    index9: '',
    index10: '',
    index11: '',
  }
];

@Component({
  selector: 'app-buy-input',
  templateUrl: './buy_input.component.html',
  styleUrls: ['./buy_input.component.scss']
})

export class BuyInputComponent implements OnInit {

  constructor(private router:Router,private service:DataService) { }

  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.dataSource = this.service.data1;
    // console.log(this.service.data1);
  }

  goto(){
    // console.log(this.dataSource);
    
    // console.log(this.service.data1);
    // console.log(this.dataSource[0].index1)
    // if (!this.dataSource[0].index1){
    //   alert("请选择投资信托说明书！");
    //   return;
    // }
    // if (this.dataSource[0].index3 == ""){
    //   alert("请选择取引区分！");
    //   return;
    // }
    // if (this.dataSource[0].index8 == ""){
    //   alert("请填写金额！");
    //   return;
    // }
    // if (this.dataSource[0].index9 == "" || this.dataSource[0].index10 == "" || this.dataSource[0].index11 == ""){
    //   alert("请正确填写电话号码！");
    //   return;
    // }
    // this.service.data1 = this.dataSource;
    // for (let i = 0; i < this.service.dataList.length; i++) {
    //   if (this.service.dataList[i].name == "取引区分") {
    //     if (this.service.data1[0].index3 == '0') {
    //       this.service.dataList[i].info = "NSA欲优先";
    //     }else{
    //       this.service.dataList[i].info = "特定预";
    //     }
        
    //   }
    //   if (this.service.dataList[i].name == "经济口座记号-番号") {
    //     this.service.dataList[i].info = this.service.data1[0].index8;
    //   }
    //   if (this.service.dataList[i].name == "日中联络电话番号") {
    //     this.service.dataList[i].info = this.service.data1[0].index9+'-'+this.service.data1[0].index10+'-'+this.service.data1[0].index11;
    //   }
    // }
    
    console.log(this.service.data1);
    this.router.navigate(['/pages/cpage1']);
  }

  goback() {
    this.router.navigate(['/pages/fundList']);
  }

}


// export class CardOverviewExample {}
