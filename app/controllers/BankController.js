import { CheckingAccount } from '../domain/bank/CheckingAccount.js';
import { BankStatementView } from '../ui/views/BankStatementView.js';

export class BankController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputBank = $('#bank').value;
    this._inputAgency = $('#agency').value;
    this._inputAccountNumber = $('#accountNumber').value;
    this._balance = 0;
  }

  add(event) {
    event.preventDefault();
    this._createBankAccount();
  }

  _createBankAccount() {
    return new CheckingAccount(
      this._inputBank,
      this._inputAgency,
      this._inputAccountNumber,
      this._balance
    )
  }

  deposit(event) {
    event.preventDefault();
    const formatedValues = this._formatOperationValue();
    const bankStatement = new BankStatementView('bankStatement');

    const liElement = `You did a deposit of R$${formatedValues[0]} at ${formatedValues[1]}`;
    bankStatement.update(liElement);
  }

  withDraw(event) {
    event.preventDefault();
  }

  clear() {
    const $ = document.querySelector.bind(document);
    $('#withDraw').value = '';
    $('#deposit').value = '';
  }

  _formatOperationValue() {
    let currentDate = new Date().toString();
    currentDate = currentDate.replace('GMT-0300 (Horário Padrão de Brasília)','');
    const $ = document.querySelector.bind(document);
    const value = $('#withDraw').value;
    return [currentDate, value]; 
  }
}