'use scrict';
let total = 0;
let input;
while (input !== null) {
  input = prompt('Введіть число');
  total += Number(input);
}
if (input === null) {
  alert(`Общая сумма чисел равна ${total}`);
}
