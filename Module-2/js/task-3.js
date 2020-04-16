"use strict";
const findLongestWord = function (string) {
  let word = string.split(" ");
  let theLongestWord = word[0];
  for (let i = 0; i < word.length; i += 1) {
    if (theLongestWord.length < word[i].length) {
      theLongestWord = word[i];
    }
  }
  return theLongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
