import {describe, expect, it} from 'vitest'
import { Auction } from './Auction'
import { Auctioneer } from './Auctioneer'
import { Bid } from './Bid'
import { Product } from './Product'
import { User } from './User'

describe('Testes da classe de leilão', () => {
  const p1 = new Product(
    'Quadro do Picasso', 
    25000, 
    'Um quadro sem qualquer significado ou tecnica avançada que possa o dar algum valor',
    '#8922457',
    'Picasso'
  )

  const auc1 = new Auctioneer('Eduardo')

  const user1 = new User('Gabriel')
  const user2 = new User('Rafael')
  const user3 = new User('Miguel')
  it('Deve realizar os cálculos com lances corretamente', () => {
    const a1 = new Auction(
      [
        new Bid(30000, user1), 
        new Bid(32000, user2), 
        new Bid(40000, user3),
      ], 
      p1,
      new Date(),
      auc1
    )

    expect(a1.getBidsAverage()).toBe(34000)
    expect(a1.getGreaterBids(2)).toEqual([32000, 40000])
  })
})