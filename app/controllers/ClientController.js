import { Employee } from '../domain/client/Employee.js';
import { ClientView } from '../ui/views/ClientView.js'; 

export class ClientController {
  constructor() {
    this._inputName = $('#name').value;
    console.log('input: ', this._inputName);
    this._inputCpf = $('#cpf').value;
    this._inputBirth = $('#birth').value;
    this._inputSalary = $('#salary').value;
  }

  add(event) {
    event.preventDefault();
    const employee = this._createEmployee();
    const $ = document.querySelector.bind(document);
    console.log('input: ', this._inputName);
    console.log(`input name: ${this._inputName} - input cpf: ${this._inputCpf} - input birth: ${this._inputBirth} - input salary: ${this._inputSalary}`);
    console.log(employee);
    this._fillClientFields(employee);
    this._hideFormShowDisplayClient();
  }

  _createEmployee() {
    return new Employee(
      this._inputName,
      this._inputCpf,
      this._inputBirth,
      this._inputSalary,
    )
  }

  _fillClientFields(employeeClass) {
    const clientView = new ClientView();
    clientView.update(employeeClass);
  }
  
  _hideFormShowDisplayClient() {
    const $ = document.querySelector.bind(document);
    $('.client__info').style.display = 'block';
    $('.client__fields').style.display = 'none';
  }
}