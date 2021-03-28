//varibales

let productName = document.querySelector("#productName");
let productDesc = document.querySelector("#productDesc");
let productFileImg = document.querySelector("#urlImage");
//let productQuntaty = document.querySelector("#productQuntaty");
let btnCreateProduct = document.querySelector("#btnCreateProduct");
let productSize = document.querySelector("#productSize");
let createProductForm = document.querySelector(".create-product-form");
let productSizeValue ;
let productImage;

//Events

productSize.addEventListener("change", getProductSizeValue);
btnCreateProduct.addEventListener("click", createProduct);
productFileImg.addEventListener("change", uploadImg);

//Functions

//get Product Size Value
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

// Create a new Product 
function createProduct(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("dataBase_products"));
    let nameValue = productName.value;
    let descValue = productDesc.value;
    //let quntatyValue = productQuntaty.value;

    if(nameValue && descValue){
        let obj = {
            id: allProducts? allProducts.length +1 : 1, 
            title: nameValue,
            desc: descValue,
            size: productSizeValue,
            imageUrl: productImage,
            like: false,
            qty: 1,
            isMe: "y"
        }
        let newProducts = allProducts? [...allProducts,obj] : [obj];
        localStorage.setItem("dataBase_products",JSON.stringify(newProducts));
        productName.value = "";
        productDesc.value = "";
        productSize.value = "";
    }else{
        alert("Please Fill All Information...");
    }   
   // console.log(obj);
   setTimeout(() => {
     window.location = "index.html";
   },1000);
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
