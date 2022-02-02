import { Person } from './Person.js';

export class Employee extends Person {
  constructor(name, cpf, birth, salary) {
    super(name, cpf, birth);
    this.salary = salary;
  }

  // get salary() {
  //   return this.salary;
  // }

  // set salary(newSalary) {
  //   this.salary = newSalary;
  // }
}
