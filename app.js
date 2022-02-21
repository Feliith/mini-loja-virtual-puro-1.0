
const items = [
    {
        title: 'Camiseta',
        price: 49.99,
        url: 'img/t-shirt',
        qnt: 0
    },
    {
        title: 'Moletom',
        price: 69.99,
        url: 'img/sweatshirt',
        qnt: 0
    },
    {
        title: 'Calça',
        price: 79.89,
        url: 'img/pants',
        qnt: 0
    }
]

const Store = () => {
    const productsConteiner = document.querySelector('.products')

    items.map((props, index) => {
        productsConteiner.innerHTML += `
            <div class="product-single">
                <div class="slider">
                    <div class="product-slider">
                        <span class="white-ball"></span>
                        <span class="white-ball-shadow"></span>
                        <img src="${props.url}.png" class="product-image"></img>
                    </div>
                </div>
                <h3 class="product-name">${props.title} - R$${props.price}</h3>
                <button class="cart-btn" onClick="getID(${index}, ${props.price})">Adicionar ao carrinho</button>
            </div>
        `
    })
}
Store()

updateCart = () => {
    const cartConteiner = document.querySelector('.cart')

    cartConteiner.innerHTML = ''

    items.map((props, index) => {
        if (props.qnt > 0) {
            cartConteiner.innerHTML += `
                <div class="single-conteiner-cart">
                    <div class="product-cart">
                        <img src="${props.url}.png" class="product-image cart"></img>
                    </div>
                    <div class="product-single-title">
                        <h3 class="product-name cart">${props.title}</h3>
                        <h3 class="product-name cart">R$${props.price}</h3>
                        <div class="product-quant">
                            <button class="product-btn sub" onClick="productSub(${index}, ${props.price})">-</button>
                            <p>${props.qnt}</p>
                            <button class="product-btn add" onClick="productAdd(${index}, ${props.price})">+</button>
                        </div>
                        <button class="remove-all" onClick="removeAll(${index}, ${props.price})"><img src="img/icons/x.png"/></button>
                    </div>
                </div>
            `
        }
    })
    totalPriceSpan.innerText = `R$${parseFloat(totalPrice.toFixed(2))}`
}

getID = (id, price) => {
    items[id].qnt++
    totalPrice += price
    updateCart()
    cartConfirm(id)
}

cartConfirm = (id) => {
    const cartBtn = document.querySelectorAll('.cart-btn')
    const confirmed = document.createElement('p')
    confirmed.classList.add('confirmed-comment')
    confirmed.textContent = 'Adicionado ao carrinho!'
    confirmed.style.animation = 'fadeInOut 1.5s'
    cartBtn[id].appendChild(confirmed)
    setTimeout(() => {
        cartBtn[id].removeChild(confirmed)
    }, 1500)
}

productSub = (id, price) => {
    items[id].qnt--
    totalPrice -= price
    updateCart()
}

productAdd = (id, price) => {
    items[id].qnt++
    totalPrice += price
    updateCart()
}

removeAll = (id, price) => {
    totalPrice -= items[id].qnt * price
    items[id].qnt = 0
    updateCart()
}

const totalPriceConteiner = document.querySelector('.total-price')
const totalPriceSpan = document.querySelector('.total-price > span')

let totalPrice = 0



navScroll = () => {
    const nav = document.querySelector('.nav')

    window.onscroll = onScroll

    function onScroll() {
        if (window.scrollY < 200) {
            nav.classList.remove('scroll')
            nav.style.animation = ''
        } else {
            nav.classList.add('scroll')
            nav.style.animation = 'navMove .5s'
        }
    }
}
navScroll()
