import {describe, expect, it} from 'vitest'
import { Auction } from './Auction'
import { Product } from './Product'

describe('Testes da classe de leilão', () => {
  const p1 = new Product(
    'Quadro do Picasso', 
    25000, 
    'Um quadro sem qualquer significado ou tecnica avançada que possa o dar algum valor',
    '#8922457',
    'Picasso'
  )
  it('Deve realizar os cálculos com lances corretamente', () => {
    const a1 = new Auction([30000, 32000, 40000], p1, new Date())

    expect(a1.getBidsAverage()).toBe(34000)
    expect(a1.getGreaterBids(2)).toEqual([32000, 40000])
  })
})