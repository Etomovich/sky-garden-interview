import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  @Input() offerBenefitValue: number;
  @Input() offerBenefitType: string;
  @Input() commodityImage: string;
  @Input() stockRecordPriceCurrency: string;
  @Input() commodityTitle: string;
  @Input() commodityVendor: string;
  @Input() currentPrice: number;
  
  previousPrice: string;
  percentDrop: number;

  constructor() { }

  ngOnInit() {
    this.calculatePercentValue();
    this.calculatePreviousPrice();
  }

  calculatePercentValue(){
    this.offerBenefitType === "Percentage" ?
      this.percentDrop = this.offerBenefitValue :
      this.percentDrop = this.offerBenefitValue * 100;
  }

  calculatePreviousPrice(){
    const currentPercent = ((100 - this.percentDrop)/100);
    this.previousPrice = (this.currentPrice/currentPercent)
      .toFixed(2);
  }

}
