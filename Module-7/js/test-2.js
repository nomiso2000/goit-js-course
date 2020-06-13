"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const mainUl = document.querySelector("#ingredients");

function createItemOfList(arr) {
  for (const el of arr) {
    const item = document.createElement("li");
    item.textContent = el;
    mainUl.appendChild(item);
  }
}
createItemOfList(ingredients);
console.log(mainUl);
