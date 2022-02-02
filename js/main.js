import { CheckingAccount } from './CheckingAccount.js';
import { Employee } from './Employee.js';

function createNewClient() {
  const namePerson = document.querySelector('#name').value;
  const cpf = document.querySelector('#cpf').value;
  const birth = document.querySelector('#birth').value;
  const salary = document.querySelector('#salary').value;

  const client = new Employee(namePerson, cpf, birth, salary);
  console.log(client);
}

const buttonSubmit = document.querySelector('#buttonSubmit');
buttonSubmit.addEventListener('click', event => {
  event.preventDefault();
  createNewClient();
});
