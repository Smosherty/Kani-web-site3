window.onload = initialize;

function initialize(){
    const FORM_SIGNUP = document.getElementById("form-signup");
    FORM_SIGNUP.addeventListener("submit", validateFormSignup);
}

function validateFormSignup(event){
    const FORM_SIGNUP = event.target;

    const USER_NAME = document.getElementById("user-name").value;

    if(!USER_NAME || USER_NAME == ""){
        event.preventDefault();
        document.getElementById("error-username-required").style.display = "block"
        console.log(" error: Este campo es obligatorio");
    }
}