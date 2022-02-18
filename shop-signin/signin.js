const signinForm = document.getElementById('signinForm');
signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let retrievedObject = JSON.parse(localStorage.getItem(email));
    if (password == retrievedObject.password){
        localStorage.setItem("loggedUser", JSON.stringify(retrievedObject));
        location.href="../shop-homepage/shop.html";
    } else {
        let message = document.getElementById('message');
        message.style.display = 'block';
    }
});