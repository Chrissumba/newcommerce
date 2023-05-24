const products_container = document.getElementById("products");



function createProductCard(product) {
    const img = document.createElement("img");
    img.setAttribute("src", product.image)

    const title_product = document.createElement("h4");
    title_product.innerText = product.title;

    const category = document.createElement("span");
    category.innerText = product.category;
    const price = document.createElement("p");
    price.innerHTML = `Price: <span>$${product.price}</span>`;


    const product_card = document.createElement("div");
    product_card.classList.add("product");
    //The event Listener to help in updating the counter 
    var button = document.createElement("button")
    button.textContent = "Add to cart";
    button.addEventListener('click', function() {
        addToCart(product);
        updateCartCounter();
    });

    //This calls the function to clear the cart
    const clearCartButton = document.getElementById('clear-cart-button');
    clearCartButton.addEventListener('click', clearCart);




    product_card.append(img, title_product, category, price, button);



    return product_card

}

const base_url = "https://fakestoreapi.com/products"

async function getAllProducts() {
    try {
        let result = await fetch(base_url)
        let products = await result.json()
        return products;
    } catch (error) {
        console.log(error);
    }
}



async function PutProducts() {
    let products = await getAllProducts()
    if (products && products.length > 0) {
        let product_cards = products.map(product => createProductCard(product))
        products_container.append(...product_cards)
    } else {
        const errorElement = document.createElement("h4")
        errorElement.innerText = "Something went wrong with the products";
        errorElement.style.color = "red"
        products_container.appendChild(errorElement)
    }


}

PutProducts()



// Jewellery

const Jewellery = document.getElementById("option1");

function createjewelery(product) {
    const img = document.createElement("img");
    img.setAttribute("src", product.image)

    const title_product = document.createElement("h4");
    title_product.innerText = product.title;

    const category = document.createElement("span");
    category.innerText = product.category;
    const price = document.createElement("p");
    price.innerHTML = `Price: <span>$${product.price}</span>`;


    const product_card = document.createElement("div");
    product_card.classList.add("product");

    product_card.append(img, title_product, category, price);

    return product_card

}

const jew = "https://fakestoreapi.com/products/category/jewelery"

async function getjewelery() {
    try {
        let result = await fetch(jew)
        let products = await result.json()
        return products;
    } catch (error) {
        console.log(error);
    }
}



async function thejew() {
    let products = await getjewelery()
    if (products && products.length > 0) {
        let product_cards = products.map(product => createProductCard(product))
        Jewellery.append(...product_cards)
    } else {
        const errorElement = document.createElement("h4")
        errorElement.innerText = "Something went wrong with the products";
        errorElement.style.color = "red"
        Jewellery.appendChild(errorElement)
    }


}

thejew()



// electronics

const electronics = document.getElementById("option2");

function createelctronics(product) {
    const img = document.createElement("img");
    img.setAttribute("src", product.image)

    const title_product = document.createElement("h4");
    title_product.innerText = product.title;

    const category = document.createElement("span");
    category.innerText = product.category;
    const price = document.createElement("p");
    price.innerHTML = `Price: <span>$${product.price}</span>`;


    const product_card = document.createElement("div");
    product_card.classList.add("product");

    product_card.append(img, title_product, category, price);

    return product_card

}

const ele = "https://fakestoreapi.com/products/category/electronics"

async function getelectronics() {
    try {
        let result = await fetch(ele)
        let products = await result.json()
        return products;
    } catch (error) {
        console.log(error);
    }
}



async function theelec() {
    let products = await getelectronics()
    if (products && products.length > 0) {
        let product_cards = products.map(product => createProductCard(product))
        electronics.append(...product_cards)
    } else {
        const errorElement = document.createElement("h4")
        errorElement.innerText = "Something went wrong with the products";
        errorElement.style.color = "red"
        el.appendChild(errorElement)
    }


}

theelec()

// functionality to show single product