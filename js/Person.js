export class Person {
  constructor(name, cpf, birth) {
    this.name = name;
    this.cpf = cpf;
    this.birth = birth;
  }

  // Name
  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

  // CPF
  get cpf() {
    return this.cpf;
  }

  set cpf(newCpf) {
    this.cpf = newCpf;
  }

  // Birth
  get birth() {
    return this.birth;
  }

  set birth(newBirth) {
    this.birth = newBirth;
  }
}
