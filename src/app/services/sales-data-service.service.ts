import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesDataServiceService {

  constructor(private _http: HttpClient) {

  }

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get('https://localhost:44355/api/order/' + pageIndex + '/' + pageSize).pipe(map(res => res || []));
  }

  getOrdersByCustomer(n: number) {
    return this._http.get('https://localhost:44355/api/order/bycustomer/' + n).pipe(map(res => res || []));
  }

  getOrdersByState() {
    return this._http.get('https://localhost:44355/api/order/bystate/').pipe(map(res => res || []));
  }
}
