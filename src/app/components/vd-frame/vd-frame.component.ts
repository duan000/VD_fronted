import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vd-frame',
  templateUrl: './vd-frame.component.html',
  styleUrls: ['./vd-frame.component.scss']
})
export class VdFrameComponent implements OnInit {

  @Input() display: any;
  @Input() status: any;
  events: string[] = [];
  
  opened: boolean=true;

  constructor(public commonService: CommonService, private router:Router) { }

  ngOnInit(): void {
    console.log("display:[" + this.display + "]")
  }

  closeSide() {

  }

}
