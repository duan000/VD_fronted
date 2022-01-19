import { Component, OnInit } from '@angular/core';
import { BasicPageComponent } from 'src/app/common/basicPage';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-cpage2',
  templateUrl: './cpage2.component.html',
  styleUrls: ['./cpage2.component.scss']
})


export class Cpage2Component extends BasicPageComponent implements OnInit {

  public data: any = {};

  tempData: any = {
    kuben: '購入区分',
    time: '15:30',
    status: '受付中',
    amountA: '10000',
    amountB: '20000',
    amountC: '50000',
    amountD: '60000',
    day: '2022-01-05',
    number: '00001'
  }

  constructor(private service: DataService) {
    super();
  }

  ngOnInit(): void {

    this.data = this.service.data.data.details[0];

    console.log(this.data);

  }

}
