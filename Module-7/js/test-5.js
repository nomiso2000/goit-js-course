"use strict";
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInputChange);
const defaultName = output.textContent;
function handleInputChange(event) {
  if (event.currentTarget.value === "") {
    return (output.textContent = defaultName);
  }
  output.textContent = event.currentTarget.value;
}
