import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockEod } from './model/stock-eodmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetStocksService {
  myapikey ="80b552c3688ccdb41475ef5e81c0538b";
  stockurl = `http://api.marketstack.com/v1/eod?access_key=${this.myapikey}&symbols=AAPL`;
  constructor(private http: HttpClient) {
  }

  getStocks(): Observable<[]>{
    return this.http.get<any>(this.stockurl)
    .pipe(
      map(v => v['data'] )
    )
  }
  // getStocks(): Observable<StockEod[]>{

  //     return this.http.get<[]>(this.stockurl);
  //   }
}
