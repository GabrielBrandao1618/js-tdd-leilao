import {format} from 'date-fns'

import { Product } from "./Product";

export class Auction {
  _bids: number[] = []
  _product: Product
  _date: Date

  constructor(bids: number[], product: Product, date: Date) {
    this._bids = bids;
    this._product = product
    this._date = date
  }

  getBidsAverage(){
    return this._bids.reduce((acc, val) => acc+val)/this._bids.length
  }
  getGreaterBids(quantity: number){
    const sortedBids = this._bids.sort((a, b) => a-b);
    return sortedBids.slice(-quantity)
  }
  getDate(){
    return format(this._date, `dd'/'MM'/'yyyy`)
  }
}