//Edit Profile User 
let userAvatarDom = document.querySelector("#urlImage");
let userNameDom = document.querySelector("#userName");
let userEmailDom = document.querySelector("#userEmail");
let userPasswordDom = document.querySelector("#userPassword");
let userImage;
let btnEditProfile = document.querySelector("#btnEditProfile");



btnEditProfile.addEventListener("click",editProfileUser);

function editProfileUser(e){
    e.preventDefault();
    if(userNameDom.value =="" || userEmailDom.value == "" || userPasswordDom ==""){
        alert("Please Fill The Information");
    }else{
        localStorage.setItem("userName",userNameDom.value);
        localStorage.setItem("userEmail",userEmailDom.value);
        localStorage.setItem("userPassword",userPasswordDom.value);
        setTimeout(() => {
            window.location = "profileUser.html";
        }, 500);
    }
}

userAvatarDom.addEventListener("change", uploadImg);

//upload User Avatar
function uploadImg(){
    let file= this.files[0];
    let types = ["image/jpeg","image/png"];

    if(types.indexOf(file.type) == -1){
        alert("file Not Supported");
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("Your File Is So Big , Please Choose Another Photo");
        return;
    }
    
    getImageBase64(file);

}

// to convert path the Images to be able to use them
function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (){
         localStorage.setItem("userAvatarUrl",reader.result);
    }

    reader.onerror = function () {
        alert("Error");
    }
}
