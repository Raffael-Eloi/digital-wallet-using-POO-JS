import { CheckingAccount } from './CheckingAccount.js';
import { Employee } from './Employee.js';

function clear() {
  document.querySelector('#withDraw').value = '';
  document.querySelector('#deposit').value = '';
}

function getWithDrawValue() {
  return parseInt(document.querySelector('#withDraw').value);
}

function getDepositValue() {
  return parseInt(document.querySelector('#deposit').value);
}

function showHiddenClientDiv() {
  const divClientInfo = document.querySelector('.client__info');
  const divClientFields = document.querySelector('.client__fields');
  localStorage.getItem('client') === null
    ? (divClientInfo.style.display = 'none')
    : (divClientInfo.style.display = 'block');
  localStorage.getItem('client') === null
    ? (divClientFields.style.display = 'block')
    : (divClientFields.style.display = 'none');

  if (localStorage.client != null && localStorage.account != null) {
    fillAllTheFields();
  }
}

function fillAllTheFields() {
  const client = localStorage.client;
  const account = localStorage.account;
  const clientObj = JSON.parse(client);
  const accountObj = JSON.parse(account);
  fillFieldsClient(clientObj);
  fillFieldsAccount(accountObj);
}

function fillFieldsClient(objClient) {
  document.querySelector('#client__info__name').innerHTML = objClient.name;
  document.querySelector('#client__info__cpf').innerHTML = objClient.cpf;
  document.querySelector('#client__info__birth').innerHTML = objClient.birth;
  document.querySelector('#client__info__salary').innerHTML = objClient.salary;
}

function fillFieldsAccount(objAccount) {
  document.querySelector('#account__info__bank').innerHTML = objAccount.bank;
  document.querySelector('#account__info__agency').innerHTML =
    objAccount.agency;
  document.querySelector('#account__info__accountNumber').innerHTML =
    objAccount.accountNumber;
  document.querySelector('#account__info__balance').innerHTML =
    objAccount.balance;
}

function createNewClient() {
  const namePerson = document.querySelector('#name').value;
  const cpf = document.querySelector('#cpf').value;
  const birth = document.querySelector('#birth').value;
  const salary = document.querySelector('#salary').value;

  const client = new Employee(namePerson, cpf, birth, salary);
  localStorage.setItem('client', JSON.stringify(client));
  // fillFieldsClient(client);
}

function createNewAccount(status, actionType) {
  const bank = document.querySelector('#bank').value;
  const agency = document.querySelector('#agency').value;
  const accountNumber = document.querySelector('#accountNumber').value;
  if (status == 'first') {
    const account = new CheckingAccount(bank, agency, accountNumber, 0);
    localStorage.setItem('account', JSON.stringify(account));
    localStorage.setItem('previousBalance', 0);
  } else {
    console.log(localStorage);
    let previsousBalanceLocalStorage = parseInt(
      localStorage.getItem('previousBalance')
    );
    let currentBalance = 0;
    let invalidAction = false;
    if (actionType == 'withdraw') {
      if (previsousBalanceLocalStorage >= getWithDrawValue()) {
        currentBalance = previsousBalanceLocalStorage -= getWithDrawValue();
      } else {
        alert(`You don't have ballance enough !`);
        invalidAction = true;
        currentBalance = previsousBalanceLocalStorage;
      }
    } else {
      currentBalance = previsousBalanceLocalStorage += getDepositValue();
    }

    console.log(localStorage.getItem(localStorage.account.bank));
    const account = new CheckingAccount(
      localStorage.getItem('bank'),
      localStorage.getItem('agency'),
      localStorage.getItem('accountNumber'),
      currentBalance
    );
    localStorage.setItem('previousBalance', currentBalance);
    localStorage.setItem('account', JSON.stringify(account));
    !invalidAction ? clear() : null;
  }
  // fillFieldsAccount(account);
  fillAllTheFields();
}

const buttonDeposit = document.querySelector('#depositButton');
buttonDeposit.addEventListener('click', event => {
  event.preventDefault();
  createNewAccount('change', 'deposit');
});

const buttonwithDraw = document.querySelector('#withDrawButton');
buttonwithDraw.addEventListener('click', event => {
  event.preventDefault();
  createNewAccount('change', 'withdraw');
});

const buttonSubmit = document.querySelector('#clientButtonSubmit');
buttonSubmit.addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('.client__info').style.display = 'block';
  createNewClient();
  createNewAccount('first');
  document.querySelector('.client__fields').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', showHiddenClientDiv);
