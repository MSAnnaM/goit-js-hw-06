const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const search = document.querySelector("#ingredients");
const arrIngredients = [];
for (let ingredient of ingredients) {
  let create = document.createElement("li");
create.className = "item";
  create.textContent = ingredient;
  arrIngredients.push(create);
}
search.append(...arrIngredients)