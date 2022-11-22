export class Product {
  _name: string
  _minPrice: number
  _description: string
  _code: string
  _manufacturer: string

  constructor(
    name: string,
    minPrice: number,
    description: string,
    code: string,
    manufacter: string
  ) {
    this._name = name
    this._minPrice = minPrice
    this._description = description
    this._code = code
    this._manufacturer = manufacter
  }

  get name(){
    return this._name
  }
  get minPrice(){
    return this._minPrice
  }
  get description(){
    return this._description
  }
  get code(){
    return this._code
  }
  get manufacter(){
    return this._manufacturer
  }
}