"use strict";
import users from "./users.js";

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
