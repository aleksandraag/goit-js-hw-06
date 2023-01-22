"use strict";
const input = document.querySelector("#validation-input");

const symbolNum = Number(input.dataset.length);
console.log(symbolNum);

input.addEventListener("blur", () => {
  if (input.value.length !== symbolNum) {
    input.classList.remove(...input.classList);
    input.classList.add("invalid");
  } else {
    input.classList.remove(...input.classList);
    input.classList.add("valid");
  }
});
