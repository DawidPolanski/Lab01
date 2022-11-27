const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "12345") { // zadeklarowanie stringa jako username i password
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("somthink went wrong"); //dodanie alertu do blednego logowania
    }
})
