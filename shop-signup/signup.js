const signupForm = document.getElementById('signupForm');
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let user = { };
    user.firstName=document.getElementById('firstname').value;
    user.lastname=document.getElementById('lastname').value;
    user.phone=document.getElementById('phone').value;
    user.password=document.getElementById('password').value;
    user.news=document.getElementById('news').checked;
    user.gdpr=document.getElementById('gdpr').checked;
    
    let email = document.getElementById('email').value;
    localStorage.setItem(email, JSON.stringify(user));
    location.href="../shop-signin/signin.html"

// Retrieve the object from storage
var retrievedObject = localStorage.getItem(email);

console.log('retrievedObject: ', JSON.parse(retrievedObject));
});