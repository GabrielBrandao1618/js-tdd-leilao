import { User } from "./User"

export class Bid {
  _value: number
  _user: User

  constructor(value: number, user: User){
    this._value = value
    this._user = user
  }

  get value(){
    return this._value
  }
}