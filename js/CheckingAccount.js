import { Account } from './Account.js';

export class CheckingAccount extends Account {
  constructor(bank, agency, accountNumber, balance) {
    super(bank, agency, accountNumber, balance);
  }

  currentBalance() {
    return this.balance;
  }

  // set balance(newBalance) {
  //   this._balance = newBalance;
  // }

  withDraw(value) {
    if (this.balance >= value) {
      this.balance -= value;
    }
  }

  deposit(value) {
    this.balance += value;
  }
}
