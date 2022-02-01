import { Account } from './Account.js';

export class CheckingAccount extends Account {
  constructor(agency, accountNumber) {
    super(agency, accountNumber);
  }
}
