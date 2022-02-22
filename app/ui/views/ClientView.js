import { View } from './View.js';

export class ClientView extends View{
  template(model) {
    const $ = document.querySelector.bind(document);
    $('#client__info__name').innerHTML = model.name;
    $('#client__info__cpf').innerHTML = model.cpf;
    $('#client__info__birth').innerHTML = model.birth;
    $('#client__info__salary').innerHTML = model.salary;
  }
}