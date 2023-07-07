
const inputValue = document.getElementById("validation-input");
let eventValue;

const inputEvent = (event) => {
    eventValue = event.currentTarget.value;
};

const evaluteValue = () => {    
    if(eventValue.length == inputValue.dataset.length){
        inputValue.setAttribute("class", "valid");
    }
    else {
        inputValue.setAttribute("class", "invalid");
    };
};

inputValue.addEventListener("input", inputEvent);
inputValue.addEventListener("blur", evaluteValue);
