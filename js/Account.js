export class Account {
  constructor(agency, accountNumber) {
    this.agency = agency;
    this.accountNumber = accountNumber;
  }

  // Agency
  get agency() {
    return this.agency;
  }

  set agency(newAgency) {
    this.agency = newAgency;
  }

  // AccountNumber
  get accountNumber() {
    return this.accountNumber;
  }

  set accountNumber(newAccountNumber) {
    this.accountNumber = newAccountNumber;
  }
}
