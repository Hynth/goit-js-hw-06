
const formSubmit = document.querySelector(".login-form");


const sendSubmit = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("All fields must be filled in!");
        return;
    }

    const info = {
        [email.name]: email.value,
        [password.name]: password.value
    }

    console.log(info);
    event.currentTarget.reset();    
};

formSubmit.addEventListener("submit", sendSubmit);
