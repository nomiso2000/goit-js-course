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
