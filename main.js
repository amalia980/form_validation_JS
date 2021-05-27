const form = document.querySelector("form");
const button = form.querySelector("button");
const errorDiv = form.querySelectorAll(".error");

button.addEventListener("click", function(event) {
    event.preventDefault();

    /*first name*/

    const inputField = form.querySelector("#firstname");
    const stringValue = inputField.value;
    const stringLength = stringValue.length;

    if (stringLength >= 2) {
        errorDiv.innerText = stringValue + "valid!";
    }
    else {
        errorDiv.innerText = stringValue + "not valid";
    }

    /*email*/

    const inputFieldMail = form.querySelector("#email");
    const stringValueEmail = inputFieldMail.value;
    const stringLengthEmail = stringValueEmail.length;

    if (stringLengthEmail = stringValueEmail.includes("@")) {
        errorDiv.innerText = stringValue + "valid!";
    }
    else {
        errorDiv.innerText = stringValueEmail + "not valid";
    }

    /*password */
    const inputFieldPassword = form.querySelector("#password");
    const stringValuePassword = inputFieldPassword.value;
    const stringLengthPassword = stringValuePassword.length;

    if (stringLengthPassword >= 6 && stringValuePassword) {
        errorDiv.innerText = stringValuePassword + "valid!";
    }
    else {
        errorDiv.innerText = stringLengthPassword + "not valid!";
    }
});