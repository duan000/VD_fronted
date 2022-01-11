import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPageComponent } from 'src/app/common/basicPage';
import { CustCardInService } from 'src/app/service/cust-card-in.service';

const ELEMENT_DATA: any[] = [

  { name: '年收入', list_td: ['なし', '240万円以下', '510万円以下', '720万円以下', '2400万円以下', '3400万円以下', '540万円以下', '1億以内'], value: '' },
  { name: '金融資産', list_td: ['なし', '240万円以下', '510万円以下', '720万円以下', '2400万円以下', '3400万円以下', '640万円以下', '7400万円以下', '9500万円以下', '2億以内'], value: '' },
  { name: '投資方針', list_td: ['なし', '240万円以下', '510万円以下', '720万円以下', '2400万円以下'], value: '' },
];

const ELEMENT_DATA1: any[] = [
  { list_name: '株', value: '' },
  { list_name: '株信用', value: '' },
  { list_name: 'ワラント', value: '' },
  { list_name: '先物op', value: '' },
  { list_name: '外国証正券', value: '' },
  { list_name: 'CB', value: '' },
  { list_name: '公社俸', value: '' },
  { list_name: '投資信託', value: '' },
  { list_name: 'その他', value: '' },
]

@Component({
  selector: 'app-custom-card-input',
  templateUrl: './custom-card-input.component.html',
  styleUrls: ['./custom-card-input.component.css']
})
export class CustomCardInputComponent extends BasicPageComponent implements OnInit {

  data = {
    radioValue: [
      { annualIncome: '' },
      { financialAssets: '' },
      { investmentPolicy: '' }
    ],
    investmentExperience: [
      {inputValue1:''},
      {inputValue2:''},
      {inputValue3:''},
      {inputValue4:''},
      {inputValue5:''},
      {inputValue6:''},
      {inputValue7:''},
      {inputValue8:''},
      {inputValue9:''}
    ],
  }

  dataSource = ELEMENT_DATA;
  // input_1-7绑定的值
  dataSource1 = ELEMENT_DATA1;

  // radio绑定的值
  public radioValue: any[] = [];
  constructor(private router: Router, private custService: CustCardInService) {
    super();
  }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

  nextPage() {

    this.custService.dataSource1 = this.dataSource1;
    this.custService.radioValue = this.radioValue;
    console.log(this.custService.dataSource1)
    console.log(this.custService.radioValue)
    console.log(this.data);
    
    
    this.router.navigate(['pages/fundList'])
  }

  goBack() {

    this.router.navigate(['pages/fundList'])
  }
}
