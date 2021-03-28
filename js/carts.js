//to display user list
let listInfo = document.querySelector(".user-info");
listInfo.style.display = "flex";
let userInfoName = document.querySelector(".user-info-name");
userInfoName.innerHTML = localStorage.getItem('userName');
let noProduct = document.querySelector(".noProduct");


//draw list products


function drawProductsList(allProducts = []){

    if(JSON.parse(localStorage.getItem('productsInCart')).length === 0) noProduct.innerHTML= "there are no products" ;

    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    let productsPostion = document.querySelector(".products");
    let productList = products.map((item) =>{        
        return `
        <div class="product-item" style="border-color: ${item.isMe =="y"? "green" : ""}">       
            <img src="${item.imageUrl}" alt="">
            <div class="product-item-info">
                <a onclick="saveItemId(${item.id})" class="product-item-title capitalize">${item.title}</a>
                <p class="product-item-desc">${item.desc} </p>
                <span class="product-item-size">size : ${item.size}</span>
                <button class="btn-edit-item capitalize" style="display: ${item.isMe == "y"? "block": "none"}" 
                onclick = 'editProduct(${item.id})'> edit item </button>
            </div> <!-- ./product-item-info -->
            <div class="product-item-actions">
                <button class="add-to-cart capitalize" onclick="removeFromCart(${item.id})">remove from cart</button>
            </div> <!-- ./product-item-actions -->
        </div> <!-- ./product-item -->
        `;
     });
     productsPostion.innerHTML = productList.join("");
 }

 drawProductsList();


//remove Frome Cart
function removeFromCart(id){
     let productsInCart = localStorage.getItem('productsInCart');
     if(productsInCart){
         let items = JSON.parse(productsInCart);
         let filteredItems = items.filter( (item) => item.id !== id);
         localStorage.setItem('productsInCart', JSON.stringify(filteredItems));
         drawProductsList();
     }
 }

  //save ID Item To draw item in page details product
function saveItemId(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";

}

