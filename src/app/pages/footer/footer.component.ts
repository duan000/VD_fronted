import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.commonService.loginFlag = false;
    console.log('logout');
    this.router.navigate(['/']);
  }

}
