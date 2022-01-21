import { Component, OnInit } from '@angular/core';
import { GaService } from 'src/app/service/ga.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit {

  constructor(private gaService: GaService) { }


  handleClick(event: any) {
    console.log('event');
    this.gaService.sendEvent('User Action', 'click', 'conversion', '3000');
  }
  goBack(){
    this.gaService.sendEvent('User1 Action1', 'click1', 'conversion1', '4000');
    console.log('1');
    
  }

  ngOnInit(): void {
  }

}
