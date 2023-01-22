"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);

ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.innerHTML = ingredient;
  item.classList.add(`item`);
  list.append(item);
});
