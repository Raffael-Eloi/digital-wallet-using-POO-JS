import { Account } from './Account.js';

export class CheckingAccount extends Account {
  static _balance = 0;

  constructor(bank, agency, accountNumber) {
    super(bank, agency, accountNumber);
  }

  get balance() {
    return this._balance;
  }

  // set balance(newBalance) {
  //   this._balance = newBalance;
  // }

  withDraw(value) {
    if (this._balance >= value) {
      this._balance -= value;
    }
  }

  deposit(value) {
    this._balance += value;
  }
}
