import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router) { }

  nameCtrl: FormControl = new FormControl('',Validators.required);
  passwordCtrl: FormControl = new FormControl('', [Validators.required]);
  errorFlg: boolean = false;

  ngOnInit(): void {

  }

  goPageOne() {
    if (this.nameCtrl.valid && this.passwordCtrl.valid) {
      this.errorFlg = false;
      this.commonService.loginFlag = true;
      this.router.navigate(['/pages/pageOne']);
    } else {
      this.errorFlg = true;
      console.log('stop');
    }

  }
}
