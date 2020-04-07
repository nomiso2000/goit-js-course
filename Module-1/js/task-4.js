'use scrict';
const credits = 23580;
const pricePerDroid = 3000;
let message;
let countDroid = prompt('How much droid do u wont?');
countDroid = Number(countDroid);
const totalPrice = countDroid * pricePerDroid;
const balance = credits - totalPrice;

if (countDroid === 0) {
  message = 'Отменено пользователем!';
} else if (totalPrice >= credits) {
  message = 'Недостаточно средств на счету!';
} else if (balance > 0 && countDroid > 0) {
  message = `Вы купили ${countDroid} дроидов, на счету осталось ${balance} кредитов.`;
}
console.log(message);
