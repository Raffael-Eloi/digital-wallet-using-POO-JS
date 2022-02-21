export class Person {
  constructor(name, cpf, birth) {
    if (this.constructor == Person) {
      throw new Error(
        "You can't instancy a object type Person diretly, because Person is a abstract class"
      );
    }
    this._name = name;
    this._cpf = cpf;
    this._birth = birth;
  }

  // Name
  get name() {
    return this._name;
  }

  // CPF
  get cpf() {
    return this._cpf;
  }

  // Birth
  get birth() {
    return this._birth;
  }
}
