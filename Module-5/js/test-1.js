"use strict";

const Account = function ({ email, login }) {
  this.email = email;
  this.login = login;
};
Account.prototype.getInfo = function () {
  const message = `Login: ${this.login}, Email: ${this.email}`;
  console.log(message);
};

console.log(Account.prototype.getInfo);
const mango1 = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango1.getInfo();
const poly1 = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly1.getInfo();
