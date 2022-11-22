import {format} from 'date-fns'
import { Auctioneer } from './Auctioneer';
import { Bid } from './Bid';

import { Product } from "./Product";

export class Auction {
  _bids: Bid[] = []
  _product: Product
  _date: Date
  _auctioneer: Auctioneer

  constructor(bids: Bid[], product: Product, date: Date, auctioneer: Auctioneer) {
    this._bids = bids
    this._product = product
    this._date = date
    this._auctioneer = auctioneer
  }

  getBidsAverage(){
    return this._bids.reduce((acc, val) => acc+val.value, 0)/this._bids.length
  }
  getGreaterBids(quantity: number){
    const sortedBids = this._bids.sort((a, b) => a.value-b.value).map(bid => bid.value)
    return sortedBids.slice(-quantity)
  }
  getDate(){
    return format(this._date, `dd'/'MM'/'yyyy`)
  }
}