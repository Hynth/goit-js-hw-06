
const fontStyleValue = document.getElementById("font-size-control");
const textValue = document.getElementById("text");

const changeSize = () => {
    textValue.style.fontSize = fontStyleValue.value+"px";
};

fontStyleValue.addEventListener("mouseup", changeSize);