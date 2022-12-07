const navBtn = document.querySelector("#nav-btn");
const menu = document.querySelector("#navigation-menu");

let isOpen = false;
navBtn.addEventListener("click", () => {
    if (isOpen) {
        menu.style.transform = "translateX(-100%)";
        navBtn.innerHTML = `<i class="fas fa-bars"></i>`
        isOpen = false
    } else {
        menu.style.transform = "translateX(0)";
        navBtn.innerHTML = `<i class="fas fa-xmark"></i>`;
        isOpen = true;
    }
});

const name = document.querySelector("#name-input");
const formEl = document.querySelector("#form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    alert(name.value);
    name.value = ""
});

//! Bozorliq
const form = document.querySelector("#form");
const productInput = document.querySelector("#product-input");
const productList = document.querySelector("#bozorliq-list");

const product_list = [];

function addProduct(product) {
    product_list.push(product);
};

function renderProds(arr) {
    arr.forEach((product) => {
        let productTemplate = `<li>${product}</li>`;
        productList.innerHTML += productTemplate;
    });
};

form.addEventListener("submit", (e) => {
    if(productInput.value !== ""){
        e.preventDefault();
        addProduct(productInput.value);
        productList.innerHTML = "";
        renderProds(product_list);
        productInput.value = "";
    }else{
        alert("Xatolik")
    }
})