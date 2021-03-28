//for profile page
let user_avatar = document.querySelector(".user-avatar-img");
let user_nickName = document.querySelector(".profile-user-info .user-nickName"); 
let user_email = document.querySelector(".profile-user-info .user-email"); 
let products_length = document.querySelector(".profile-user-info .products-length"); 
let allproducts = JSON.parse(localStorage.getItem("dataBase_products"));

// show profile info
let userEmail = localStorage.getItem("userEmail");
let userAvatarUrl = localStorage.getItem("userAvatarUrl");
let counter = 0;
let getLengthProducts = allproducts.map((item) => {
    if(item.isMe == "y") counter++;
    return counter;
});

if(checkUser){
    user_avatar.innerHTML = `<img src="${userAvatarUrl}" alt="user-avatar" > `;
    user_nickName.innerHTML = checkUser;
    user_email.innerHTML = userEmail;
    if(counter != 0){
        products_length.innerHTML += counter;
    }else{
        products_length.remove();
    }
}