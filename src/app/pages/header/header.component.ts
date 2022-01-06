import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.commonService.loginFlag = false;
    console.log('logout');
    this.router.navigate(['/signIn']);
  }

}
