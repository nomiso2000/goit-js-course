"use strict";
import users from "./users.js";
const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, current) => {
      allSkills.push(...current.skills);
      return allSkills;
    }, [])
    .sort()
    .filter((elem, index, array) => index === array.indexOf(elem));

console.table(getSortedUniqueSkills(users));

let number = [1, 2, 3, 4, 5, 5, 5, 5, 8, 10, 5];
console.table(number.filter((elem, index, array) => console.log(index)));
