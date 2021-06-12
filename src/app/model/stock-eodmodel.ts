export class StockEod{
  constructor(
           public open: null | number ,
            public high: null | number,
            public low: null | number,
            public close: null | number,
            public volume: null | number,
            public adj_high: null | number,
            public adj_low: null | number,
            public adj_close: null | number,
            public adj_open: null | number,
            public adj_volume: null | number,
            public split_factor: null | number,
            public symbol: string,
            public exchange: string,
            public date: string | Date,
  ){}
}
