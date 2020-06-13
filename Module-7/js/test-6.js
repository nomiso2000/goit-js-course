"use strict";
const validLength = Number(
  document.querySelector("#validation-input").getAttribute("data-length")
);
const input = document.querySelector("#validation-input");

input.addEventListener("blur", findLength);

function findLength(e) {
  const ourLength = e.currentTarget.value.length;
  if (ourLength === validLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
