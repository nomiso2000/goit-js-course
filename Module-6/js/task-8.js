"use strict";
import users from "./users.js";

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.find((friend) => friend === friendName))
    .map((user) => user.name);

console.table(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
