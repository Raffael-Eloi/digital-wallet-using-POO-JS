import { View } from './View.js';

export class BankStatementView extends View {
  update(newElement) {
    this._element.appendChild = this.template(newElement);
  }

  template(newElement) {
    const li = document.createElement('li');
    li.createTextNode(newElement);
  }
}