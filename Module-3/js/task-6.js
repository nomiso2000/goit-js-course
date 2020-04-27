"use strict";
const productss = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const arrElement of allProdcuts) {
    if (arrElement.name === productName) {
      return arrElement.price * arrElement.quantity;
    }
  }
};

console.log(calculateTotalPrice(productss, "Радар")); // 5200

console.log(calculateTotalPrice(productss, "Дроид")); // 2800
