let products = JSON.parse(localStorage.getItem('dataBase_products'));
let itemId = localStorage.getItem('productId');
let cartDetailsDom =document.querySelector(".details-item");
let productDetails = products.find((item) => item.id == itemId);


cartDetailsDom.innerHTML = `
    <img src="${productDetails.imageUrl}" alt="">
    <h2 class="details-item-title">${productDetails.title}</h2>
    <p class="product-item-desc">${productDetails.desc} </p>
    <span class="details-item-size">size : ${productDetails.size}</span><br>
    <span class="details-item-qty">Quntaty : ${productDetails.qty}</span><br>
    <button class="btn-edit-item capitalize" style="display: ${productDetails.isMe == "y"? "block": "none"}" 
    onclick = 'editProduct(${productDetails.id})'> edit item </button>
    `;
    
    // Edit Product
    
    function editProduct(id){
        localStorage.setItem("edit_product_id",id);
        setTimeout(() =>{ window.location= "editProduct.html"},500);
    }
    
    
// to Save For My Views Page   
let myViews = localStorage.getItem("myViews")? JSON.parse(localStorage.getItem("myViews")) : [];
let checkMyViews = myViews.some((item) => item.id == productDetails.id);
if(!(checkMyViews)){
    myViews = [...myViews,productDetails];
    localStorage.setItem("myViews",JSON.stringify(myViews));
}