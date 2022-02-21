function addProduct(product, carousel) {
    let carouselDiv = document.createElement("div");
    carouselDiv.className = "carousel-case";
    carouselDiv.id = product.code;

    let discountDiv = document.createElement("div");
    discountDiv.className = "discount";
    discountDiv.textContent = "-" + product.discount + "%";
    let a = document.createElement("a");
    a.href = "../shop-productdetails/productdetails.html";
    let img = document.createElement("img");
    img.src = "../shop-localStorage/" + product.image;
    img.height = 350;
    img.alt = "product image";
    let title = document.createElement("h3");
    title.textContent = product.name;
    let span = document.createElement("span");
    span.textContent = product.price + " RON";
    let p = document.createElement("p");
    p.textContent = Math.trunc(product.price - product.discount / 100 * product.price) + " RON ";

    if(product.discount > 0) {
        carouselDiv.appendChild(discountDiv);
    }
    carouselDiv.appendChild(a);
    carouselDiv.appendChild(title);
    carouselDiv.appendChild(p);
    a.appendChild(img);
    if(product.discount > 0) {
        p.appendChild(span);
    }

    carousel.appendChild(carouselDiv);

    carouselDiv.addEventListener("click", function(event){
        localStorage.setItem("selectedProduct", JSON.stringify(product));
    });
}

let products = JSON.parse(localStorage.getItem("products"));

// Add products to promo carousel
let carouselPromo = document.getElementById("innerPromo");
let promoProducts = products.filter(function(el) {
    return el.discount > 0;
})
for (let product of promoProducts) {
    addProduct(product, carouselPromo);
}

// Add products to news carousel
let carouselNews = document.getElementById("innerNews");
let newsProducts = products.filter(function(el) {
    return el.new == true;
})
for (let product of newsProducts) {
    addProduct(product, carouselNews);
}

// Add products to recomm carousel
let carouselRecomm = document.getElementById("innerRecomm");
let recommProducts = products.filter(function(el) {
    return el.recommended == true;
})
for (let product of recommProducts) {
    addProduct(product, carouselRecomm);
}

// Promo Carousel
let numberOfPromoProducts = promoProducts.length;
let numberOfVisible = 4;
let toLeftPromo = numberOfPromoProducts - numberOfVisible + 1;
let toRightPromo = 1;

let leftArrowPromo = document.getElementById("leftArrowPromo");
leftArrowPromo.addEventListener("click", function(event){
    const slides = document.getElementById("innerPromo");
    if (toLeftPromo == numberOfPromoProducts - numberOfVisible + 1) {
        let nb = (numberOfPromoProducts - numberOfVisible) * 200;
        slides.style.transform = "translateX(-" +  nb + "px)";
        toLeftPromo = 1;
        toRightPromo = numberOfPromoProducts - numberOfVisible + 1;;
    } else {
        let nb = (numberOfPromoProducts - numberOfVisible) * 200 - toLeftPromo * 200;
        slides.style.transform = "translateX(-" + nb + "px)";
        toLeftPromo++;
        toRightPromo--;
    }
});


let rightArrowPromo = document.getElementById("rightArrowPromo");
rightArrowPromo.addEventListener("click", function(event){
    const slides = document.getElementById("innerPromo");
    if (toRightPromo == numberOfPromoProducts - numberOfVisible + 1) {
        let nb = 0;
        slides.style.transform = "translateX(" + nb + "px)";
        toRightPromo = 1;
        toLeftPromo = numberOfPromoProducts - numberOfVisible + 1;
    } else {
        let nb = toRightPromo * 200;
        slides.style.transform = "translateX(-" + nb + "px)";
        toRightPromo++;
        toLeftPromo--;
    }
});

// News Carousel
let numberOfNewsProducts = newsProducts.length;
let toLeftNews = numberOfNewsProducts - numberOfVisible + 1;
let toRightNews = 1;

let leftArrowNews = document.getElementById("leftArrowNews");
leftArrowNews.addEventListener("click", function(event){
    const slides = document.getElementById("innerNews");
    if (toLeftNews == numberOfNewsProducts - numberOfVisible + 1) {
        let nb = (numberOfNewsProducts - numberOfVisible) * 200;
        slides.style.transform = "translateX(-" +  nb + "px)";
        toLeftNews = 1;
        toRightNews = numberOfNewsProducts - numberOfVisible + 1;;
    } else {
        let nb = (numberOfNewsProducts - numberOfVisible) * 200 - toLeftNews * 200;
        slides.style.transform = "translateX(-" + nb + "px)";
        toLeftNews++;
        toRightNews--;
    }
});


let rightArrowNews = document.getElementById("rightArrowNews");
rightArrowNews.addEventListener("click", function(event){
    const slides = document.getElementById("innerNews");
    if (toRightNews == numberOfNewsProducts - numberOfVisible + 1) {
        let nb = 0;
        slides.style.transform = "translateX(" + nb + "px)";
        toRightNews = 1;
        toLeftNews = numberOfNewsProducts - numberOfVisible + 1;
    } else {
        let nb = toRightNews * 200;
        slides.style.transform = "translateX(-" + nb + "px)";
        toRightNews++;
        toLeftNews--;
    }
});

// Recommended Carousel
let numberOfRecommProducts = recommProducts.length;
let toLeftRecomm = numberOfRecommProducts - numberOfVisible + 1;
let toRightRecomm = 1;

let leftArrowRecomm = document.getElementById("leftArrowRecomm");
leftArrowRecomm.addEventListener("click", function(event){
    const slides = document.getElementById("innerRecomm");
    if (toLeftRecomm == numberOfRecommProducts - numberOfVisible + 1) {
        let nb = (numberOfRecommProducts - numberOfVisible) * 200;
        slides.style.transform = "translateX(-" +  nb + "px)";
        toLeftRecomm = 1;
        toRightRecomm = numberOfRecommProducts - numberOfVisible + 1;;
    } else {
        let nb = (numberOfRecommProducts - numberOfVisible) * 200 - toLeftRecomm * 200;
        slides.style.transform = "translateX(-" + nb + "px)";
        toLeftRecomm++;
        toRightRecomm--;
    }
});


let rightArrowRecomm = document.getElementById("rightArrowRecomm");
rightArrowRecomm.addEventListener("click", function(event){
    const slides = document.getElementById("innerRecomm");
    if (toRightRecomm == numberOfRecommProducts - numberOfVisible + 1) {
        let nb = 0;
        slides.style.transform = "translateX(" + nb + "px)";
        toRightRecomm = 1;
        toLeftRecomm = numberOfRecommProducts - numberOfVisible + 1;
    } else {
        let nb = toRightRecomm * 200;
        slides.style.transform = "translateX(-" + nb + "px)";
        toRightRecomm++;
        toLeftRecomm--;
    }
});

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


