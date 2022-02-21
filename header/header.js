let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function (event) {
    let searchValue = document.getElementById("search-input").value;
    localStorage.setItem("search", JSON.stringify(searchValue));
    location.href="../shop-productlist/productlist.html";
});

let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
if(loggedUser) {
    const p = document.createElement("p");
    p.textContent = "Hello, " + loggedUser.firstname;
    p.style.fontSize = "18px";
    let div = document.getElementById('hicon');
    div.insertBefore(p, div.firstChild);
    let registerBtn = document.getElementById('reg-btn');
    let loginBtn = document.getElementById('log-btn');
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartNumber = document.getElementById('cart-number');
    console.log(cartNumber.textContent);
    cartNumber.textContent = cart; 
    let logoutBtn = document.getElementById('out-btn');
    logoutBtn.addEventListener("click", function (event) {
        let user = {};
        localStorage.setItem("loggedUser", {});
        localStorage.setItem("cart", JSON.stringify(0));
    });
} else {
    let logoutBtn = document.getElementById('out-btn');
    logoutBtn.style.display = "none";
}

