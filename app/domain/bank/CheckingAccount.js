import { Account } from './Account.js';

export class CheckingAccount extends Account {
  constructor(bank, agency, accountNumber, balance) {
    super(bank, agency);
    this._accountNumber = accountNumber;
    this._balance = balance;
    Object.freeze(this);
  }

  // AccountNumber
  get accountNumber() {
    return this._accountNumber;
  }

  currentBalance() {
    return this._balance;
  }

  withDraw(value) {
    if (this._balance >= value) {
      this._balance -= value;
    }
  }

  deposit(value) {
    this._balance += value;
  }
}
