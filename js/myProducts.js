// myProducts
let products = JSON.parse(localStorage.getItem("dataBase_products"));
let noProduct = document.querySelector(".noProduct");

// draw myProducts


let drawProductsList;
(drawProductsList = function (products = []){
    let myProducts = products.filter((item) => item.isMe == "y");
    if(myProducts.length > 0){
        let productsPostion = document.querySelector(".products");
        let productList = myProducts.map((item) => {
            return `
            <div class="product-item" style="border-color: ${item.isMe =="y"? "green" : ""}">       
                <img src="${item.imageUrl}" alt="">
                <div class="product-item-info">
                    <a onclick="saveItemId(${item.id})" class="product-item-title capitalize">${item.title}</a>
                    <p class="product-item-desc">${item.desc} </p>
                    <span class="product-item-size">size : ${item.size}</span>
                    <button class="btn-edit-item capitalize" onclick = 'editProduct(${item.id})'> edit item </button>
                    <br>
                    <button class="btn-delete-item" onclick="deleteItem(${item.id})">Delete Item</button>
                </div> <!-- ./product-item-info -->
                </div> <!-- ./product-item-actions -->
            </div> <!-- ./product-item -->
            `;
        });
        productsPostion.innerHTML = productList.join("");
    }
    else{
        noProduct.innerHTML= "There Are Not Products";
    }
 })(products);

 // Delete Product
 function deleteItem(id){
     let myProducts = products.filter((item) => item.id != id );
     localStorage.setItem("dataBase_products",JSON.stringify(myProducts));
     window.location = "myProducts.html";
 }

 // Edit Product

function editProduct(id){
    localStorage.setItem("edit_product_id",id);
    setTimeout(() =>{ window.location= "editProduct.html"},500);
}

 //save ID Item To draw item in page details product
 function saveItemId(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";

}