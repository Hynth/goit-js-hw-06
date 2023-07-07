
const cnt = document.getElementById("counter");
const decrement = cnt.firstElementChild;
const increment = cnt.lastElementChild;

const counterValue = document.getElementById("value");

const incrementClick = () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

const decrementClick = () => {
    counterValue.textContent -= 1;
}


decrement.addEventListener("click", decrementClick);
increment.addEventListener("click", incrementClick);