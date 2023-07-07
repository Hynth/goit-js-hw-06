
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const valueOutput = output.textContent;

const inputEvent = (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent.length < 1) {
        output.textContent = valueOutput;
    };
};

input.addEventListener("input", inputEvent);
