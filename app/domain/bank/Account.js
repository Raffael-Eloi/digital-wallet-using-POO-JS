export class Account {
  constructor(bank, agency) {
    this._bank = bank;
    this._agency = agency;
  }

  // Bank
  get bank() {
    return this.bank;
  }

  // Agency
  get agency() {
    return this._agency;
  }
}
