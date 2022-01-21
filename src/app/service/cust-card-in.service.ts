import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustCardInService {

  dataSource1: any[] = [];
  radioValue = {
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

  constructor() { }
}
