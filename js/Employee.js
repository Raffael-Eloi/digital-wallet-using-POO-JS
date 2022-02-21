import { Person } from './Person.js';

export class Employee extends Person {
  constructor(name, cpf, birth, salary) {
    super(name, cpf, birth);
    this._salary = salary;
    Object.freeze(this);
  }

  // Salary
  get salary() {
    return this._salary;
  }
}
