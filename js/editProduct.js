//Edit Product
// variables
let productName = document.querySelector("#productName");
let productDesc = document.querySelector("#productDesc");
let productFileImg = document.querySelector("#urlImage");
let productSize = document.querySelector("#productSize");
let updateProductForm = document.querySelector(".update-product-form");
let btnUpdateProduct = document.querySelector("#btnUpdateProduct");
let idItem = localStorage.getItem("edit_product_id");
let products = JSON.parse(localStorage.getItem("dataBase_products"));
let productSizeValue ;
let productImage;

product = products.find((item) => item.id == idItem);

productImage = product.imageUrl;
productName.value = product.title;
productDesc.value = product.desc;
productSize.value = product.size;


//Events
productSize.addEventListener("change", getProductSizeValue);
btnUpdateProduct.addEventListener("click",updateProduct);
productFileImg.addEventListener("change", uploadImg);


//get Product Size Value
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}


// Update a new Product 
function updateProduct(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("dataBase_products"));
    product.title = productName.value;
    product.desc = productDesc.value;
    product.size = productSizeValue;
    product.imageUrl = productImage;
    
    localStorage.setItem("dataBase_products",JSON.stringify(products));
    setTimeout(()=> {window.location="index.html"},500);
   
}


//upload Image The Product
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
        productImage = reader.result;
    }

    reader.onerror = function () {
        alert("Error");
    }
}
