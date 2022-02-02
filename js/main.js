import { CheckingAccount } from './CheckingAccount.js';
import { Employee } from './Employee.js';

function fillFields(objClient) {
  document.querySelector('#client__info__name').innerHTML = objClient.name;
  document.querySelector('#client__info__cpf').innerHTML = objClient.cpf;
  document.querySelector('#client__info__birth').innerHTML = objClient.birth;
  document.querySelector('#client__info__salary').innerHTML = objClient.salary;
}

function createNewClient() {
  const namePerson = document.querySelector('#name').value;
  const cpf = document.querySelector('#cpf').value;
  const birth = document.querySelector('#birth').value;
  const salary = document.querySelector('#salary').value;

  const client = new Employee(namePerson, cpf, birth, salary);

  fillFields(client);
}

const buttonSubmit = document.querySelector('#buttonSubmit');
buttonSubmit.addEventListener('click', event => {
  event.preventDefault();
  createNewClient();
});
