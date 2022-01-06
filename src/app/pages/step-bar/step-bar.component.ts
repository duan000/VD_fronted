import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  @Input() display: any; 
  @Input() status: any;
  

  ngOnInit(): void {
    console.log(this.status);
  }

}
