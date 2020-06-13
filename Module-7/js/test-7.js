"use strict";
const inputController = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputController.addEventListener("input", (e) => {
  let currentRange = e.currentTarget.value;
  return (text.style.fontSize = `${currentRange}px`);
});
