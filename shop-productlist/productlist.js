let filterInputs = document.querySelectorAll('input[type="checkbox"]');
for(let input of filterInputs) {
    input.checked = false;
}

function addProduct(product) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.id = product.code;

    let imgDiv = document.createElement("div");
    imgDiv.className = "imagehover";
    let a = document.createElement("a");
    a.href = "../shop-productdetails/productdetails.html";
    let img = document.createElement("img");
    img.src = "../shop-localStorage/" + product.image;
    img.alt = "product image";
    img.height = "400"
    let title = document.createElement("h3");
    title.textContent = product.name;
    let span = document.createElement("span");
    span.textContent = product.price + " RON";
    let p = document.createElement("p");
    p.textContent = Math.trunc(product.price - product.discount / 100 * product.price) + " RON ";


    cardDiv.appendChild(imgDiv);
    imgDiv.appendChild(a);
    cardDiv.appendChild(title);
    cardDiv.appendChild(p);
    a.appendChild(img);
    if(product.discount > 0) {
        p.appendChild(span);
    }
    let imageContainer = document.getElementById('image-grid');
    imageContainer.appendChild(cardDiv);

    cardDiv.addEventListener("click", function(event){
        localStorage.setItem("selectedProduct", JSON.stringify(product));
    });
}

let products = JSON.parse(localStorage.getItem("products"));
let numberOfProducts = document.getElementById('browse-title');

let category = JSON.parse(localStorage.getItem("category"));
let searchValue = JSON.parse(localStorage.getItem("search"));
if(category) {
    let filterProducts = products.filter(function(el) {
        return el.category === category;
    });
    for (let product of filterProducts) {
        addProduct(product);
    }
    numberOfProducts.textContent = "Rezultate cautare pentru " + category + ": " + filterProducts.length + " produse";
}

if (searchValue === "") {
    if (category === "") {
        for (let product of products) {
            addProduct(product);
        }
        numberOfProducts.textContent = "Rezultate cautare: " + products.length + " produse";
    }

} else {
    let searchInput = document.getElementById("search-input");
    searchInput.value = searchValue;

    // Clear loaded products
    let cardsParent = document.getElementById("image-grid");
    while (cardsParent.firstChild) {
        cardsParent.firstChild.remove()
    }

    let filterProducts = products.filter(function(el) {
        return el.brand === searchValue.toLowerCase();
    });
    for (let product of filterProducts) {
        addProduct(product);
    }
    numberOfProducts.textContent = "Rezultate cautare pentru " + searchValue + ": " + filterProducts.length + " produse";

    let checkbox = document.getElementById(searchValue.toLowerCase());
    if(checkbox) {
        checkbox.checked = true;
    }
}

let filterBtn = document.getElementById("filter-btn");
filterBtn.addEventListener("click", function(event) {
    let searchInput = document.getElementById("search-input");
    searchInput.value = "";

    let brandFilters = [];
    let brandInputs = document.querySelectorAll('input[name="brand"]');
    for (let input of brandInputs) {
        if (input.checked) {
            brandFilters.push(input.value);
        }
    }
    let colorFilters = [];
    let colorInputs = document.querySelectorAll('input[name="color"]');
    for (let input of colorInputs) {
        if (input.checked) {
            colorFilters.push(input.value);
        }
    }
    let genderFilters = [];
    let genderInputs = document.querySelectorAll('input[name="gender"]');
    for (let input of genderInputs) {
        if (input.checked) {
            genderFilters.push(input.value);
        }
    }

    let filteredProducts = products.filter(function(el) {
        if (brandFilters.length > 0 && colorFilters.length > 0 && genderFilters.length > 0) {
            return brandFilters.includes(el.brand) && colorFilters.includes(el.color) && genderFilters.includes(el.gender);
        } else if (brandFilters.length > 0 && colorFilters.length > 0 && genderFilters.length == 0) {
            return brandFilters.includes(el.brand) && colorFilters.includes(el.color);
        } else if (brandFilters.length > 0 && colorFilters.length == 0 && genderFilters.length > 0) {
            return brandFilters.includes(el.brand) && genderFilters.includes(el.gender);
        } else if (brandFilters.length == 0 && colorFilters.length > 0 && genderFilters.length > 0) {
            return colorFilters.includes(el.color) && genderFilters.includes(el.gender);
        } else if (brandFilters.length > 0 && colorFilters.length == 0 && genderFilters.length == 0) {
            return brandFilters.includes(el.brand);
        } else if (brandFilters.length == 0 && colorFilters.length > 0 && genderFilters.length == 0) {
            return colorFilters.includes(el.color);
        } else if (brandFilters.length == 0 && colorFilters.length == 0 && genderFilters.length > 0) {
            return genderFilters.includes(el.gender);
        }
    });

    // Clear loaded products
    let cardsParent = document.getElementById("image-grid");
    while (cardsParent.firstChild) {
        cardsParent.firstChild.remove()
    }

    // Add filtered products
    for (let product of filteredProducts) {
        addProduct(product);
    }
    numberOfProducts.textContent = "Rezultate cautare: " + filteredProducts.length + " produse";
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

let sort = document.getElementById("sort");
sort.addEventListener('change', (event) => {
    console.log(event.target.value);
});