import { Component, OnInit } from '@angular/core';
import { FormControl ,ValidationErrors,Validators} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  
  email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  // required: FormControl = new FormControl('', Validators.required);
  public pageNum: number=0;

  ngOnInit(): void {
    // this.email.setErrors();
    console.log(this.commonService.color);
  }


  public judgeErrorKind() {
    let errors = this.email.errors;
    if (errors != null) {
      if (errors['required']) {
        return 'required';
      } else {
        return 'email'
      }
    } else {
      return '';
    }
  }

  getErrorMessage() {
    return "Email is valid";
  }

  doPaging(event: PageEvent){
    this.pageNum = event.pageIndex;
  }
}
