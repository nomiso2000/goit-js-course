'use scrict';
const total = 100;
let ordered = 50;
let message;
if (total >= ordered) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
} else {
  message = 'На складе недостаточно твоаров!';
}
console.log(message);
