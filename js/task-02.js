const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const search = document.querySelector("#ingredients");
for (let ingredient of ingredients) {
  let create = document.createElement("li");
create.className = "item";
  create.innerHTML = ingredient;
  search.append(create)
}