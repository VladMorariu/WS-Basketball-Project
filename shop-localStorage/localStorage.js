let products = [{
    code: "0014322323", name: "Combinezon", category: "echipamente", image: "images/echipament1.jpg",  secondImage: "images/echipament1.1.jpg", new: false, recommended: true, price: 199, brand: "adidas", color: "negru", gender: "baiat", discount: 20
},
{
    code: "0022324432", name: "Trening", category: "echipamente", image: "images/echipament2.jpg", secondImage: "images/echipament2.jpg", new: false, recommended: true, price: 249, brand: "adidas", color: "negru", gender: "fata", discount: 20
},
{
    code: "0032342343", name: "Trening", category: "echipamente", image: "images/echipament4.jpg", secondImage: "images/echipament4.4.jpg", new: true, recommended: false, price: 399, brand: "nike", color: "rosu", gender: "fata", discount: 10
},
{
    code: "0042342343", name: "Trening", category: "echipamente", image: "images/echipament5.jpg", secondImage: "images/echipament5.5.jpg", new: true, recommended: true, price: 399, brand: "nike", color: "negru", gender: "baiat", discount: 30
},
{
    code: "00452342343", name: "Echipament", category: "echipamente", image: "images/echipament3.jpg", secondImage: "images/echipament3.3.jpg", new: true, recommended: false, price: 399, brand: "jordan", color: "alb", gender: "baiat", discount: 25
},
{
    code: "00462342343", name: "Rucsac", category: "accesorii", image: "images/accesorii1.jpg", secondImage: "images/accesorii1.1.jpg", new: true, recommended: true, price: 399, brand: "nike", color: "negru", gender: "baiat", discount: 8
},
{
    code: "00472342343", name: "Rucsac", category: "accesorii", image: "images/accesorii2.jpg", secondImage: "images/accesorii2.2.jpg", new: true, recommended: true, price: 399, brand: "nike", color: "rosu", gender: "fata", discount: 0
}];

// Code used to add products to localstorage
localStorage.setItem("products", JSON.stringify(products));

console.log(JSON.parse(localStorage.getItem("products")));
