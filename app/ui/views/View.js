export class View {
  constructor(selector) {
    // this._element = document.querySelector(selector);
    this._element = document.querySelector(`[id="${bankStatement}"]`);
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }

  template(model) {
    throw new Error("You need to implement the template method");
  }
}