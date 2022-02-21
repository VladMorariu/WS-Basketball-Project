let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

// Set breadcrumbs
let breadcrumbs = document.getElementById("breadcrumbs");
let home = document.createElement("a");
home.textContent = "Home";
home.href = "../shop-homepage/shop.html";
let brand = document.createElement("a");
brand.textContent = selectedProduct.brand.charAt(0).toUpperCase() + selectedProduct.brand.slice(1);
brand.href = "../shop-productlist/productlist.html";
brand.addEventListener("click", function(event) {
    localStorage.setItem('search', JSON.stringify(selectedProduct.brand));

});
let details = document.createElement("a");
details.textContent = selectedProduct.name;
details.href = "../shop-productdetails/productdetails.html";
let span1 = document.createElement("span");
span1.textContent = " / ";
let span2 = document.createElement("span");
span2.textContent = " / ";

breadcrumbs.appendChild(home);
breadcrumbs.appendChild(span1);
breadcrumbs.appendChild(brand);
breadcrumbs.appendChild(span2);
breadcrumbs.appendChild(details);

// Load selected product info
let bigImageDiv = document.getElementById("big-image");
let bigImage = document.createElement("img");
bigImage.src = "../shop-localStorage/" + selectedProduct.image;
bigImage.alt = "product image";
bigImageDiv.appendChild(bigImage);

let otherImagesDiv = document.getElementById("other");
// console.log(otherImagesDiv);
for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    if (i % 2 == 0) {
        img.src = "../shop-localStorage/" + selectedProduct.secondImage;
    } else {
        img.src = "../shop-localStorage/" + selectedProduct.image;
    }
    img.alt = "product image";
    img.addEventListener("click", function(event) {
        bigImage.src = img.src;
    });
    otherImagesDiv.appendChild(img);
}

let productName = document.getElementById("name");
productName.textContent = selectedProduct.name;
let productPrice = document.getElementById("price");
productPrice.textContent = Math.trunc(selectedProduct.price - selectedProduct.discount / 100 * selectedProduct.price) + " RON";
let productCode = document.getElementById("code");
productCode.textContent = selectedProduct.code;
let productCategory = document.getElementById("category");
productCategory.textContent = selectedProduct.category;
let productBrand = document.getElementById("brand");
productBrand.textContent = selectedProduct.brand;
let productPromo = document.getElementById("promo");
productPromo.textContent = selectedProduct.discount > 0 ? (selectedProduct.discount + "%") : "Nu se aplica";
let productNews = document.getElementById("news");
productNews.textContent = selectedProduct.news ? "DA" : "NU";
let productRecomm = document.getElementById("recomm");
productRecomm.textContent = selectedProduct.recomm ? "DA" : "NU";



// Categories navigation
let allProducts = document.getElementById('all-products');
allProducts.addEventListener("click", function(event){
    localStorage.setItem('search', JSON.stringify(''));
    localStorage.setItem('category', JSON.stringify(''));
});

let equipments = document.getElementById('equipments');
equipments.addEventListener("click", function(event){
    localStorage.setItem('category', JSON.stringify('echipamente'));
    localStorage.setItem('search', JSON.stringify(''));
});

let accessories = document.getElementById('accessories');
accessories.addEventListener("click", function(event){
    localStorage.setItem('category', JSON.stringify('accesorii'));
    localStorage.setItem('search', JSON.stringify(''));
});

let cartBtn = document.getElementById('add-cart');
cartBtn.addEventListener("click", function(event) {
    let numberOfProducts = document.getElementById('number-of-products').value;
    let cart = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem("cart", JSON.stringify(parseInt(cart) + parseInt(numberOfProducts)));
    let cartNumber = document.getElementById('cart-number');
    cartNumber.textContent = parseInt(cart) + parseInt(numberOfProducts); 

});