'use strict';
const YOUR_NUMBER = 'Введите число';
const NOT_NUMBER = 'Было введено не число, попробуйте еще раз';
let input;
const numbers = [];
let inputNumber;
let total = 0;

while (input !== null) {
  input = prompt(YOUR_NUMBER);
  inputNumber = Number.parseFloat(input);
  if (isNaN(input)) {
    alert(NOT_NUMBER);
  } else {
    numbers.push(inputNumber);
  }
}
numbers.pop();
for (let number of numbers) {
  total = total + number;
}
console.log(`Общая сумма чисел равна ${total}`);
//************************************* */
//К ПРОВЕРЯЕЩЕМУ***********************
//Как пофиксить момент с тем, что когда
//Я просто нажимаю ОК, не вводя ничего*
//Мне выбивает NaN, и он почемуто не **
//Ловитса if-ом************************
