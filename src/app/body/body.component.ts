import { Component, OnInit } from '@angular/core';
import { GetStocksService } from '../get-stocks.service';
import { StockEod } from '../model/stock-eodmodel';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  stock: [] = [];

  constructor(private stockHttp: GetStocksService) { }

  ngOnInit(): void {
    this.stockHttp.getStocks().subscribe( data => this.stock = data)
  }

}
