import { View } from './View.js';

class BankView extends View {
  template(model) {
    const $ = document.querySelector.bind(document);
    $('#account__info__bank').innerHTML = model.bank;
    $('#account__info__agency').innerHTML = model.agency;
    $('#account__info__accountNumber').innerHTML = model.accountNumber;
    $('#account__info__balance').innerHTML = model.balance;
  }
}