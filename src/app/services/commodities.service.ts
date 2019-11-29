import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommoditiesService {

  constructor(private http: HttpClient) { }

  postRequestWithParams(endpoint: string, headers: HttpHeaders, payload: any = {}) {
    return this.http.post(endpoint, payload, { headers });
  }

  getListOfProducts(endpoint: string, filter: string, select: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': '4F2408C83BBB69BB31AE97737ED6EE2F'

    });
    const payload = {
      filter, select 
    }
    return this.postRequestWithParams(endpoint, headers, payload);
  }

}
