// Check if are there any products in localStorage
let badge = document.querySelector(".badge");
let cartsProducts = document.querySelector(".carts-products");
let cartsProductsDiv = document.querySelector(".carts-products div");
let addItem = localStorage.getItem('productsInCart')? JSON.parse(localStorage.getItem('productsInCart')) : [];
(function cartMenuData(){
    
 if(addItem){
    addItem.map( (item) => {
       cartsProductsDiv.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
}
    badge.style.display = "block";
    badge.innerHTML += addItem.length;

})();


//to open shopping cart menu
let btn_cart = document.querySelector(".shopping-cart");
btn_cart.addEventListener("click",  openCartsMenu);
function openCartsMenu(){
    if(cartsProductsDiv.innerHTML != ""){
        if(cartsProducts.style.display == "block"){
            cartsProducts.style.display = "none";
        }
        else{
            cartsProducts.style.display = "block";
        }
    }
    
}