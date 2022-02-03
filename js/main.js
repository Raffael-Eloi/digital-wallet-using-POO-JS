import { CheckingAccount } from './CheckingAccount.js';
import { Employee } from './Employee.js';

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

function createNewAccount() {
  const bank = document.querySelector('#bank').value;
  const agency = document.querySelector('#agency').value;
  const accountNumber = document.querySelector('#accountNumber').value;

  const account = new CheckingAccount(bank, agency, accountNumber);
  localStorage.setItem('account', JSON.stringify(account));
  // fillFieldsAccount(account);
  fillAllTheFields();
}

const buttonSubmit = document.querySelector('#clientButtonSubmit');
buttonSubmit.addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('.client__info').style.display = 'block';
  createNewClient();
  createNewAccount();
  document.querySelector('.client__fields').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', showHiddenClientDiv);
