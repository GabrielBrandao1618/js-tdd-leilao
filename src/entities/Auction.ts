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
    this._product = product
    bids.forEach(bid => {
      if(bid.value >= this._product.minPrice){
        return this._bids.push(bid)
      } 
      throw new Error('Cannot make a bid that is lower than the product min price')
    })
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