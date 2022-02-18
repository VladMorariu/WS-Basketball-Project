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
