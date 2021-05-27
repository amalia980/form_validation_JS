
const form = document.querySelector("form");
const button = form.querySelector("button");


button.addEventListener("click", function(event){
    event.preventDefault();


    /*first name*/

    const inputField = form.querySelector("#firstname");
    const stringValue = inputField.value;
    const stringLength = stringValue.length;

    const errorFirstName = document.getElementById("error-firstname");
    

    if (stringLength >= 2) {
        errorFirstName.innerText = "";
    } else {  
        errorFirstName.innerHTML = "Please enter at least two letters";
    }

    /*email*/

    const inputFieldMail = form.querySelector("#email");
    const stringValueEmail = inputFieldMail.value;
    const stringLengthEmail = stringValueEmail.length;

    const errorEmail = document.getElementById("error-email");

    if (stringLengthEmail >= 6 && stringValueEmail.includes("@")) {
        errorEmail.innerText = "";
    } else {
        errorEmail.innerText = "not valid";
    }

    /*password */
    
    const inputFieldPassword = form.querySelector("#password");
    const stringValuePassword = inputFieldPassword.value;
    const stringLengthPassword = stringValuePassword.length;

    const errorPassword = document.getElementById("error-password");

    if (stringLengthPassword >= 6) {
        errorPassword.innerText = "";
    } else {
        errorPassword.innerText = "Please enter at least 6 characters";
    }

    /*confirm password*/

    const inputFieldPassword2 = form.querySelector("#password-confirm");
    const stringValuePassword2 = inputFieldPassword2.value;
    const stringLengthPassword2 = stringValuePassword2.length;

    const errorPassword2 = document.getElementById("error-confirm-password");

    if (stringLengthPassword2 === stringLengthPassword2) {
        errorPassword2.innerText = "";
        alert("working");

    } else if (stringLengthPassword2 !== stringLengthPassword2){
        errorPassword2.innerText = "Not matching!";
        alert("not working");
    }

});
