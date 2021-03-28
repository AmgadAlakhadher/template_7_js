
//---------------------------------Header Section -----------------------------------------
//to check user has account or not
let links = document.querySelector(".links"); 
let userInfo = document.querySelector(".user-info"); 
let nickName = document.querySelector(".user-info-name"); 

//remove list .links and show user-info
let checkUser = localStorage.getItem("userName");

if(checkUser){
    links.remove();
    userInfo.style.display = "flex";
    nickName.innerHTML = `<a href="profileUser.html" style="color:#fff"> ${checkUser}</a>`;
}

//to logout
let btn_logout = document.querySelector(".logout");
btn_logout.addEventListener("click", () => {
    localStorage.clear();
    window.location = "index.html";
});