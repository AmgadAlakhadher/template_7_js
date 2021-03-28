// Sign up user_
let user_name = document.querySelector("#user-name");
let user_email = document.querySelector("#user-email");
let user_password = document.querySelector("#user-password");
let btn = document.querySelector("#btn-sign-up");

//function sign_up
btn.addEventListener("click",sign_up);

function sign_up(e){
    e.preventDefault();
    if((user_name.value=="") || (user_email.value=="") || (user_password.value=="")){
        alert("ERROR: Please Fill All Information");
    }
    else{
        localStorage.setItem('userName',user_name.value.trim());
        localStorage.setItem('userEmail',user_email.value.trim());
        localStorage.setItem('userPassword',user_password.value.trim());
        localStorage.setItem('userAvatarUrl',"./images/images.png");
        setTimeout( () => {
            window.location = "login.html";
        },2000);
    }
}