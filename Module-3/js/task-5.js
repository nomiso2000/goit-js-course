"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let i = 0;
  const newPropArr = [];
  while (i < arr.length) {
    let values = Object.keys(arr[i]);
    for (let value of values) {
      if (value === prop) {
        newPropArr.push(arr[i][value]);
        break;
      }
    }
    i = i + 1;
  }

  return newPropArr;
};
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
