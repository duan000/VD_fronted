import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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

  constructor(
    private router: Router,
    private custService: CustCardInService,
  ) {
    super();
  }

  investmentExperience = ['経験なし', '１年未満', '５年未満', '５年以上']
  dataSource = ELEMENT_DATA;
  // input_1-7绑定的值
  dataSource1 = ELEMENT_DATA1;

  // ボタン制御 
  isShow: boolean = false;

  public btnCheck = {
    annualIncome: '',
    financialAssets: '',
    investmentPolicy: '',
    InvestmentExperience_1: '',
    InvestmentExperience_2: '',
    InvestmentExperience_3: '',
    InvestmentExperience_4: '',
    InvestmentExperience_5: '',
    InvestmentExperience_6: '',
    InvestmentExperience_7: '',
    InvestmentExperience_8: '',
    InvestmentExperience_9: '',
  }

  watchValue() {

    if (!(this.btnCheck.annualIncome === '' || this.btnCheck.financialAssets === '' ||
      this.btnCheck.investmentPolicy === '' || this.btnCheck.InvestmentExperience_1 === '' ||
      this.btnCheck.InvestmentExperience_2 === '' || this.btnCheck.InvestmentExperience_3 === '' ||
      this.btnCheck.InvestmentExperience_4 === '' || this.btnCheck.InvestmentExperience_5 === '' ||
      this.btnCheck.InvestmentExperience_6 === '' || this.btnCheck.InvestmentExperience_7 === '' ||
      this.btnCheck.InvestmentExperience_8 === '' || this.btnCheck.InvestmentExperience_9 === '')
    ) {
      this.isShow = true
    } else {
      this.isShow = false
    }
  }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

  nextPage() {

    this.custService.dataSource1 = this.dataSource1;
    this.custService.radioValue = this.btnCheck;
    console.log(this.custService.dataSource1)
    console.log(this.custService.radioValue)

    this.router.navigate(['pages/fundList'])
  }

  goBack() {

    this.router.navigate(['pages/fundList'])
  }
}
