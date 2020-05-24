"use strict";
const Storage = function (arr = []) {
  this.arr = arr;
  this.addItem = function (item) {
    this.arr.push(item);
  };
  this.getItems = function () {
    return this.arr;
  };
  this.removeItem = function (item) {
    let res = this.arr.includes(item);
    if (res) {
      let ind = this.arr.indexOf(item);
      let remov = this.arr.splice(1, 1);
    }
  };
};

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();

console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem("Дроид");
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem("Пролонгер");
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
