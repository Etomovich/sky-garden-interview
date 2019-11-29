import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { CommoditiesService } from 'src/app/services/commodities.service';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  commoditiesService: CommoditiesService;
  initialUrl: string = 'https://skygarden.search.windows.net/indexes/'
    + 'dev-productsv3/docs/search?api-version=2017-11-11';
  filter: string = `offer_benefit_type eq 'Percentage'`;
  select: string = 'title, partner_name, thumbnail, stock_record_price_currency, '
    + 'stock_record_price_retail, offer_benefit_type, offer_benefit_value';

  nextResponseLink: string;
  productData: string [];
  filterString: string;
  selectString: string;
  skipNumber: number = 0;

  

  constructor(private injector: Injector) {
    this.commoditiesService = this.injector.get<CommoditiesService>(CommoditiesService);
  }

  ngOnInit() {
    this.getInitialProductList();
  }

  getInitialProductList(){
    this.commoditiesService.getListOfProducts(this.initialUrl, this.filter, this.select)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (response: any) => {
        this.nextResponseLink = response['@odata.nextLink'];
        this.productData = response.value;
        this.filterString = response['@search.nextPageParameters'].filter;
        this.selectString = response['@search.nextPageParameters'].select;
        this.skipNumber = response['@search.nextPageParameters'].skip;

        // console.log("skip", this.skipNumber);
        // console.log('response_link', this.nextResponseLink);
        console.log('value', this.productData);
        // console.log('filter data =>', this.filterString);
        // console.log('select data =>', this.selectString);
      },
      (err: any) => {
        console.log('ERROR', err);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
