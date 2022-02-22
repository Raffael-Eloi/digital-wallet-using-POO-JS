import { Employee } from '../domain/client/Employee.js';
import { ClientView } from '../ui/views/ClientView.js'; 

export class ClientController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputName = $('#name').value;
    this._inputCpf = $('#cpf').value;
    this._inputBirth = $('#birth').value;
    this._inputSalary = $('#salary').value;
  }

  add(event) {
    event.preventDefault();
    const employee = this._createEmployee();
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
    return new ClientView(employeeClass);
  }
  
  _hideFormShowDisplayClient() {
    const $ = document.querySelector.bind(document);
    $('.client__info').style.display = 'block';
    $('.client__fields').style.display = 'none';
  }
}