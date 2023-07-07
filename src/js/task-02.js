const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

const list = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.setAttribute("class","item");
  li.textContent = ingredient;
  return li;
});
ul.append(...list);

