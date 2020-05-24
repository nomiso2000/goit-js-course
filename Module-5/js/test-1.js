"use strict";

const Account = function (email, login) {
  this.email = email;
  this.login = login;
};
Account.prototype.getInfo = function () {
  console.log(this.email);
  console.log(this.login);
};

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
