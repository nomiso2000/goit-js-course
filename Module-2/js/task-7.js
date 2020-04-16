'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let userLogin;
const isLoginValid = function (login) {
  if (login.length >= 16 || login.length < 4) {
    return false;
  } else {
    return true;
  }
};

const isLoginUnique = function (allLogins, login) {
  let copyLogin = login.toLowerCase();
  allLogins = allLogins.join(' ').toLowerCase();
  let checkLogin = allLogins.includes(copyLogin);
  if (checkLogin === true) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === true) {
    isLoginUnique(allLogins, login);
    if (isLoginUnique(allLogins, login) === false) {
      return 'Такой логин уже используется!';
    } else {
      allLogins.push(login);
      return 'Логин успешно добавлен!';
    }
  } else {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
};
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
