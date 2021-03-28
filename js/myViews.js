// my views
let noProductsDom = document.querySelector(".noProduct");
let products = JSON.parse(localStorage.getItem("dataBase_products"));
let checkMyViews = localStorage.getItem("myViews")? JSON.parse(localStorage.getItem("myViews")) : [];


//check are there any Elements
if(checkMyViews.length > 0){
    drawProductsList(checkMyViews);
}else{
    noProductsDom.innerHTML =" there are no products";
}


//draw Elements

function  drawProductsList(products=[]){
    let productsPostion = document.querySelector(".products");
    let productList = products.map((item) => {
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
                <button class="add-to-cart" onclick="addedToCart(${item.id})">add to cart</button>
                <i onclick="addedToFavorite(${item.id})" 
                class="fa ${item.like == true? "fa-heart" : "fa-heart-o"} fa-2x "
                style = "color : ${item.like == true? "red" : ""}"
                ></i>
            </div> <!-- ./product-item-actions -->
        </div> <!-- ./product-item -->
        `;
     });
     productsPostion.innerHTML = productList.join("");
 };


  //save ID Item To draw item in page details product
function saveItemId(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";

}

//add to favorite and remove from favorite
let favoriteItems = localStorage.getItem('addedToFavorite')? JSON.parse(localStorage.getItem('addedToFavorite')) : [];
let allProducts;
let myViews;
function addedToFavorite(id){
    if(checkUser){
        let product = products.find((item) => item.id == id);
        let isProductInFavorite = favoriteItems.some((i) => i.id === product.id);

       if(isProductInFavorite){
            //to save changes in localStorage for all Products
            allProducts = products.map((item) => {
                if(item.id == product.id) item.like = false;
                return item;
            });
            localStorage.setItem("dataBase_products",JSON.stringify(allProducts));
            
            //to save changes in localStorage for My Views
            myViews = checkMyViews.map((item) => {
                if(item.id == product.id) item.like = false;
                return item;
            });
            localStorage.setItem("myViews",JSON.stringify(myViews));

            favoriteItems = favoriteItems.filter((item) => item.id !== product.id);
            localStorage.setItem("addedToFavorite",JSON.stringify(favoriteItems));
            drawProductsList(checkMyViews);
        
       }else{
            favoriteItems.push(product);
            //to save changes in localStorage for all Products
            allProducts = products.map((item) => {
                if(item.id == product.id) item.like = true;
                return item;
            });
            localStorage.setItem("dataBase_products",JSON.stringify(allProducts));

            //to save changes in localStorage for My Views
            myViews = checkMyViews.map((item) => {
                if(item.id == product.id) item.like = true;
                return item;
            });
            localStorage.setItem("myViews",JSON.stringify(myViews));

            localStorage.setItem("addedToFavorite",JSON.stringify(favoriteItems));
            drawProductsList(checkMyViews);
       }
    }else{
        setTimeout(() =>{
            window.location = "sign-up.html";
        },1000);
    }

}
