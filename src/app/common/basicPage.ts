import { Component } from '@angular/core';

@Component({
    selector: 'simple-pagination',
    template: `` }) 
    export class BasicPageComponent {
    
    errorMsg: string = "";

    constructor() {

    }

    scrollToTop() {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        })
      }
  }