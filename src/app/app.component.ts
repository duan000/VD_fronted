import { Component, OnInit } from '@angular/core';
import { CommonService } from './service/common.service';
import { NavigationEnd, Router } from '@angular/router';
import { GaService } from './service/ga.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myAngularPrj3';
  events: string[] = [];
  
  opened: boolean=true;

  constructor(
    public commonService: CommonService, 
    private router:Router,
    private gaService: GaService) {

    console.log(commonService.loginFlag);
    // commonService.loginFlag = false;
    // this.router.navigate(['/signIn']);
  }

  ngOnInit(): void {
    
        // googleAnalytics tracking
        this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe((params: any) => {
          this.gaService.sendPageView(params.url);
        });
    }
  }
