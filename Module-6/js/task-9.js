"use strict";
import users from "./users.js";

const sortByQuantiti = function (curr, next) {
  return curr.friends.length - next.friends.length;
};
const getNamesSortedByFriendsCount = (users) =>
  users.sort(sortByQuantiti).map((user) => user.name);

console.table(getNamesSortedByFriendsCount(users));
