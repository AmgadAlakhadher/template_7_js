//login user_
let user_email = document.querySelector("#user-email");
let user_password = document.querySelector("#user-password");
let btn = document.querySelector(".login-btn");

//function login
let checkEmail = localStorage.getItem('userEmail');
let checkPassword = localStorage.getItem('userPassword');
btn.addEventListener("click",login);
function login(e){
    e.preventDefault();
    if((user_email.value=="") || (user_password.value=="")){
        alert("ERROR: Please Fill All Information");
    }
    else{
        if((checkEmail.trim()===user_email.value.trim()) && (checkPassword.trim()===user_password.value.trim())){
            setTimeout(() =>{
                window.location = "index.html";
            },2000);
        }
        else{
            alert("ERROR:Some thing Not Correct Password Or Email");
        }

    }
}