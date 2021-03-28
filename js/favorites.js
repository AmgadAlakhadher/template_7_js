//to display user list
let listInfo = document.querySelector(".user-info");
listInfo.style.display = "flex";
let userInfoName = document.querySelector(".user-info-name");
userInfoName.innerHTML = localStorage.getItem('userName');
let noProduct = document.querySelector(".noProduct");
let products = JSON.parse(localStorage.getItem("dataBase_products"));

//draw list products


function drawFavoriteProductsList(allProducts = []){

    if(JSON.parse(localStorage.getItem('addedToFavorite')).length === 0) noProduct.innerHTML= "there are no products" ;

    let products = JSON.parse(localStorage.getItem('addedToFavorite')) || allProducts;
    let productsPostion = document.querySelector(".products");
    let productList = products.map((item) =>{
        return `
        <div class="product-item">       
            <img src="${item.imageUrl}" alt="">
            <div class="product-item-info">
                <h2 class="product-item-title capitalize" onclick= "saveItemId(${item.id})">${item.title}</h2>
                <p class="product-item-desc">${item.desc}</p>
                <span class="product-item-size">size : ${item.size}</span>
            </div> <!-- ./product-item-info -->
            <div class="product-item-actions">
                <button class="btn-delete-item capitalize" onclick="removeFromfavorites(${item.id})">remove from favorite</button>
            </div> <!-- ./product-item-actions --> 
        </div> <!-- ./product-item -->
        `;
     });
     productsPostion.innerHTML = productList.join("");
 }

 drawFavoriteProductsList();
 function removeFromfavorites(id){
    products = products.map((item) => {
        if(item.id == id) item.like = false;
        return item;
     });
     localStorage.setItem("dataBase_products",JSON.stringify(products));

     let addedToFavorite = localStorage.getItem('addedToFavorite');
     if(addedToFavorite){
         let items = JSON.parse(addedToFavorite);
         let filteredItems = items.filter( (item) => item.id !== id);
         localStorage.setItem('addedToFavorite', JSON.stringify(filteredItems));
         drawFavoriteProductsList();
     }
 }

 //save ID Item To draw item in page details product
function saveItemId(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";

}
