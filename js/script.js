

//---------------------------------Products Section -----------------------------------------//
let products = JSON.parse(localStorage.getItem('dataBase_products'));

let drawProductsList;
 (drawProductsList = function (products=[]){
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
 })(products);


//add to cart
function addedToCart(id){
   // let products = JSON.parse(localStorage.getItem('dataBase_products'));
    if(checkUser){
        let product = products.find((item) => item.id === id);
        let isProductInCart = addItem.some((i) => i.id === product.id);
        
        if(isProductInCart){
            addItem = addItem.map((p) =>  {
               if(p.id == product.id) p.qty +=1;
               return p;
            });
            
        }else{
            addItem.push(product);
        }

        cartsProductsDiv.innerHTML= "";
        addItem.forEach((item) => {
            cartsProductsDiv.innerHTML += `<p>${item.title} <span class="item-qty"> ${item.qty}</span></p>`;
        });

        //save data
        localStorage.setItem("productsInCart", JSON.stringify(addItem));

        //add counter of item
        let productsItemsP = document.querySelectorAll(".carts-products  p");
        badge.style.display = "block";
        badge.innerHTML = productsItemsP.length;
        
    }else{
        setTimeout(() =>{
            window.location = "sign-up.html";
        },1000);
    }

}

/* function Get Items without repeat and add quntaty

function getUniqueArr(arr,filterType){
     let unique = arr
     .map((item) => item[filterType])
     .map((item , indeX , finalArr) => finalArr.indexOf(item) === indeX && indeX)
     .filter((item) => arr[item])
     .map((item) => arr[item]);
     return unique;
}*/


//save ID Item To draw item in page details product
function saveItemId(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";

}


//Search items
let input = document.querySelector("#search");
input.addEventListener("keyup" , function (e){
    
    search(e.target.value,products);
    
    if(e.target.value.trim() === ""){
        drawProductsList(products);
    }
});
function search(title,search_array){
    let arr = search_array.filter((item) => item.title.indexOf(title) !== -1);
    drawProductsList(arr);
}


//add to favorite and remove from favorite
let favoriteItems = localStorage.getItem('addedToFavorite')? JSON.parse(localStorage.getItem('addedToFavorite')) : [];
let checkMyViews = localStorage.getItem("myViews")? JSON.parse(localStorage.getItem("myViews")) : [];

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
            
            if(checkMyViews.length > 0){
                //to save changes in localStorage for My Views
                myViews = checkMyViews.map((item) => {
                    if(item.id == product.id) item.like = false;
                    return item;
                });
                localStorage.setItem("myViews",JSON.stringify(myViews));
            }

            favoriteItems = favoriteItems.filter((item) => item.id !== product.id);
            localStorage.setItem("addedToFavorite",JSON.stringify(favoriteItems));
            drawProductsList(products);
            
       }else{
            favoriteItems.push(product);
            //to save changes in localStorage for all Products
            allProducts = products.map((item) => {
                if(item.id == product.id) item.like = true;
                return item;
            });
            localStorage.setItem("dataBase_products",JSON.stringify(allProducts));

            if(checkMyViews.length > 0){
                //to save changes in localStorage for My Views
                myViews = checkMyViews.map((item) => {
                    if(item.id == product.id) item.like = true;
                    return item;
                });
                localStorage.setItem("myViews",JSON.stringify(myViews));
            }

            localStorage.setItem("addedToFavorite",JSON.stringify(favoriteItems));
            drawProductsList(products);
       }
    }else{
        setTimeout(() =>{
            window.location = "sign-up.html";
        },1000);
    }

}


//Filter By Size

let sizeFilter = document.querySelector('.size-filter');

sizeFilter.addEventListener("change", getProductsFilterBySize);

function getProductsFilterBySize(e){
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("dataBase_products") || products);
    if(val === "all"){
        drawProductsList(products);
    }else{
        products = products.filter(i => i.size === val);
        drawProductsList(products)
    }
}


// Edit Product

function editProduct(id){
    localStorage.setItem("edit_product_id",id);
    setTimeout(() =>{ window.location= "editProduct.html"},500);
}

