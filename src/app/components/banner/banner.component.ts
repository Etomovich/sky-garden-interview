import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerTitle: string = 'HOT holiday deals';
  bannerInfo: string = `Sky. Garden loves all the fathers and knows that you
    need some help in choosing something special. Here is few of the sweet things
    we found you might like.`;
  bannerTimer: string = '00:00:00 hrs';

  constructor() { }

  ngOnInit() {
  }

}
