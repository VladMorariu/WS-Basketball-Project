const signupForm = document.getElementById('signupForm');
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let user = { };
    user.firstname=document.getElementById('firstname').value;
    user.lastname=document.getElementById('lastname').value;
    user.phone=document.getElementById('phone').value;
    user.password=document.getElementById('password').value;
    user.news=document.getElementById('news').checked;
    user.gdpr=document.getElementById('gdpr').checked;
    
    let email = document.getElementById('email').value;
    localStorage.setItem(email, JSON.stringify(user));
    location.href="../shop-signin/signin.html"
});