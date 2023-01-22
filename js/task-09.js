"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorBackground = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  colorBackground.innerHTML = newColor;
  document.body.style.background = newColor;
});
