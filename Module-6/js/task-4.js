"use strict";
import users from "./users.js";

const getInactiveUsers = (users) =>
  users.filter((user) => user.isActive === false);

console.table(getInactiveUsers(users));
