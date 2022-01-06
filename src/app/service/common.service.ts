import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loginFlag: boolean=false;

  // 'primary' | 'accent' | 'warn'
  color:ThemePalette;

  constructor() { 
    this.color = 'warn';
  }
}
