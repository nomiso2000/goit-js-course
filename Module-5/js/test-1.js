"use strict";

class Account {
  constructor(email, login) {
    this.email = email;
    this.login = login;
  }
  getInfo() {
    const message = `Login: ${this.login}, Email: ${this.email}`;
    console.log(message);
  }
}
const mango1 = new Account("Mangozedog", "mango@dog.woof");
mango1.getInfo();
const poly1 = new Account("Poly", "poly@mail.com");
poly1.getInfo();
