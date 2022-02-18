let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const p = document.createElement("p");
p.textContent = "Hello, " + loggedUser.firstname;
p.style.fontSize = "18px";
let div = document.getElementById('hicon');
div.insertBefore(p, div.firstChild);
let registerBtn = document.getElementById('reg-btn');
let loginBtn = document.getElementById('log-btn');
registerBtn.style.display = "none";
loginBtn.style.display = "none";
let logoutBtn = document.getElementById('out-btn');
logoutBtn.addEventListener("click", function (event) {
    localStorage.setItem("loggedUser", {});
});


/* <div class="carousel-case">
<div class="discount">
    -20%
</div>
<a href="">
    <img src="images/echipament2.jpg" alt="logo starters stea" title="Logo Starters" height="350">
</a>
<h3>Trening negru pentru copii</h3>
<p><span>399RON</span> 199RON</p>
</div> */

function addProduct(product) {
    let carouselDiv = document.createElement("div");
    carouselDiv.className = "carousel-case";
    let discountDiv = document.createElement("div");
    discountDiv.className = "discount";
    discountDiv.textContent = "-" + product.discount + "%";
    let img = document.createElement("img");
    img.src = "../shop-localStorage/" + product.image;
    img.height = 350;
    img.alt = "product image";
    let title = document.createElement("h3");
    title.textContent = product.name;
    let span = document.createElement("span");
    span.textContent = product.price + " RON";
    let p = document.createElement("p");
    p.textContent = (product.price - product.discount / 100 * product.price) + " RON ";
    carouselDiv.appendChild(discountDiv);
    carouselDiv.appendChild(img);
    carouselDiv.appendChild(title);
    carouselDiv.appendChild(p);
    p.appendChild(span);
    let carousel = document.getElementById("carousel");
    // carousel.appendChild(carouselDiv);
    carousel.insertBefore(carouselDiv, carousel.lastChild);
    console.log(carousel.lastChild);
}

let retrievedObject = JSON.parse(localStorage.getItem("0014322323"));
addProduct(retrievedObject);
let retrievedObject2 = JSON.parse(localStorage.getItem("0022324432"));
addProduct(retrievedObject2);
let retrievedObject3 = JSON.parse(localStorage.getItem("0032342343"));
addProduct(retrievedObject3);


