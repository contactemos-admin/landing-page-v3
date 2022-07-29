import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isMobile: boolean = false;
  itemActive: number = -1;
  smoothLoading: boolean = false;

  constructor() {
    this.isMobile = window.matchMedia("(max-width: 760px)").matches;
  }

  ngOnInit(): void {
    window.onload = () => {
      document.body.addEventListener('scroll', (event) => {
        if(!this.smoothLoading) {
          let scrollBody = document.body.scrollTop;
          if(scrollBody < (document.getElementById('aboutUs')!.offsetTop - 50)){
            this.itemActive = -1;
          } else
          if(scrollBody >= (document.getElementById('aboutUs')!.offsetTop - 50) && scrollBody < (document.getElementById('solutions')!.offsetTop - 50) ){
            this.itemActive = 0;
          } else
          if(scrollBody >= (document.getElementById('solutions')!.offsetTop - 50) && scrollBody < (document.getElementById('blog')!.offsetTop - 50) ){
            this.itemActive = 1;
          } else
          if(scrollBody >= (document.getElementById('blog')!.offsetTop - 50) && scrollBody < (document.getElementById('contactUs')!.offsetTop - 50) ){
            this.itemActive = 2;
          } else
          if(scrollBody >= (document.getElementById('contactUs')!.offsetTop - 50)) {
            this.itemActive = 3;
          }
        } else {
          setTimeout(() => {
            this.smoothLoading = false;
          }, 1000);
        }
      });
  };
  }
}
