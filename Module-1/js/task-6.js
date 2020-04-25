'use scrict';
let total = 0;
let input;
let proverka = 0;

while (input !== null) {
  input = prompt('Введіть число');
  console.log(input);
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
}
alert(`Общая сумма чисел равна ${total}`);
