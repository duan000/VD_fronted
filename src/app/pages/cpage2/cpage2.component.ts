import { Component, OnInit } from '@angular/core';
import { BasicPageComponent } from 'src/app/common/basicPage';
import {DataService} from 'src/app/service/data-service.service';


@Component({
  selector: 'app-cpage2',
  templateUrl: './cpage2.component.html',
  styleUrls: ['./cpage2.component.scss']
})
export class Cpage2Component extends BasicPageComponent implements OnInit {

  public data:any={};

  constructor(private service:DataService) { 
    super();
  }

  ngOnInit(): void {

    this.data = this.service.data.data.details[0];

    console.log(this.data);
  }

}
