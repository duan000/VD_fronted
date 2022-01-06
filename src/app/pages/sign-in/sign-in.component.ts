import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BasicPageComponent } from 'src/app/common/basicPage';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent extends BasicPageComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  user ={
    username:'',
    password:''
  }
  // user:String ='';
  // pw:String ='';


  hide = true;

  constructor(private httpClient:HttpClient, private route: Router) {
    super();
   }

  ngOnInit(): void {
  }

  
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }
    return;
    // return this.username.hasError('username') ? 'Not a valid email' : '';
  }

  signTopPage(){
    // this.route.navigate(['/pages/top']);
    this.route.navigate(['/top']);
  }

}
