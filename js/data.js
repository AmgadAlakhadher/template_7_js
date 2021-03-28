//Define product

let productsDB = [{
    id: 1,
    title: 'headphone',
    size: 'small',
    desc: 'Lorem ipsum dolor sit amet consectetur',
    imageUrl: './images/products/headPhones.jpg',
    like: false,
    qty: 1,
    isMe: "n"
   },
 {
     id: 2,
     title: 'cover ipone 11 max',
     size: 'small',
     desc: 'Lorem ipsum dolor sit amet consectetur',
     imageUrl: './images/products/coverIphone11.jpg',
    like: false,
    qty: 1,
    isMe: "n"
  },
  {
     id: 3,
     title: 'laptop MSI',
     size: 'large',
     desc: 'Lorem ipsum dolor sit amet consectetur',
     imageUrl: './images/products/laptopMSI.jpg',
    like: false,
    qty: 1
  },
  {
     id: 4,
     title: 'keyboard',
     size: 'large',
     desc: 'Lorem ipsum dolor sit amet consectetur',
     imageUrl: './images/products/keyboard.jpg',
    like: false,
    qty: 1,
    isMe: "n"
  },
  {
     id: 5,
     title: 'watch',
     size: 'small',
     desc: 'Lorem ipsum dolor sit amet consectetur',
     imageUrl: './images/products/watch.jpg',
    like: false,
    qty: 1,
    isMe: "n"
  },
  {
     id: 6,
     title: 'mobile LG 9',
     size: 'small',
     desc: 'Lorem ipsum dolor sit amet consectetur',
     imageUrl: './images/products/mobileLG.jpg',
     like: false,
     qty: 1,
     isMe: "n"
  }];
  if(JSON.parse(localStorage.getItem('dataBase_products'))){
     let allProducts = JSON.parse(localStorage.getItem('dataBase_products'));
     localStorage.setItem('dataBase_products',JSON.stringify(allProducts));
  }else{
     localStorage.setItem('dataBase_products',JSON.stringify(productsDB));
  }
  
  
  