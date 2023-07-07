function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.getElementsByTagName("body");
const btn = document.querySelector(".change-color");

const onClick = (event) => {
  const color = getRandomHexColor();
  body[0].style.backgroundColor = color;

  const span = document.querySelector(".color");
  span.textContent = color;
}

btn.addEventListener("click", onClick);

