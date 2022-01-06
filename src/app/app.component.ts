import { Component } from '@angular/core';
import { CommonService } from './service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngularPrj3';
  events: string[] = [];
  
  opened: boolean=true;

  constructor(public commonService: CommonService, private router:Router) {
    console.log(commonService.loginFlag);
    // commonService.loginFlag = false;
    // this.router.navigate(['/signIn']);
  }


}
