"use strict";

const sizeControl = document.querySelector("#font-size-control");
const spanTxt = document.querySelector("#text");

sizeControl.addEventListener("mousemove", () => {
  spanTxt.style.fontSize = sizeControl.value + "px";
});
