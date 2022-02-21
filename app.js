
const items = [
    {
        title: 'Camiseta',
        price: 'R$49,99',
        url: 'img/t-shirt-0',
        qnt: 0
    },
    {
        title: 'Moletom',
        price: 'R$69,99',
        url: 'img/sweatshirt-0',
        qnt: 0
    },
    {
        title: 'Calça',
        price: 'R$79,89',
        url: 'img/pants-0',
        qnt: 0
    }
]

const Store = () => {
    const productsConteiner = document.querySelector('.products')

    items.map((props, index) => {
        productsConteiner.innerHTML += `
            <div class="product-single">
                <button class="slider-button left" onClick="leftBtn(${index})">
                    <img src="img/icons/arrows-left.png"/>
                </button>
                <button class="slider-button right" onClick="rightBtn(${index})">
                    <img src="img/icons/arrows-right.png"/>
                </button>
                <div class="slider">
                    <div class="product-slider">
                        <span class="white-ball"></span>
                        <span class="white-ball-shadow"></span>
                        <img src="${props.url + 1}.png" class="product-image"></img>
                        <img src="${props.url + 2}.png" class="product-image"></img>
                        <img src="${props.url + 3}.png" class="product-image"></img>
                    </div>
                </div>
                <h3 class="product-name">${props.title} - ${props.price}</h3>
                <button key="${index}" class="cart-btn" onClick="getID(this)">Adicionar ao carrinho</button>
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
                        <img src="${props.url + (pos[index] + 1)}.png" class="product-image cart"></img>
                    </div>
                    <div>
                        <h3 class="product-name">${props.title}  x${props.qnt}</h3>
                        <h3 class="product-name">Cor: ${setColor(index)}</h3>
                    </div>
                </div>
            `
        }
    })
}

setColor = (id) => {
    if (pos[id] == 0) {
        return 'Preto'
    } else if (pos[id] == 1) {
        return 'Verde'
    } else {
        return 'Vermelho'
    }
}

getID = (btn) => {
    let key = btn.getAttribute('key')
    items[key].qnt++
    updateCart()
}



const productSlider = document.querySelectorAll('.product-slider')

let pos = [0 , 0, 0]

leftBtn = (id) => {
    if (pos[id] == 0) {
        pos[id] = 2
        productSlider[id].style.marginLeft = `${-250 * pos[id]}px`
    } else {
        pos[id]--
        productSlider[id].style.marginLeft = `${-250 * pos[id]}px`
    }
}

rightBtn = (id) => {
    if (pos[id] == 2) {
        pos[id] = 0
        productSlider[id].style.marginLeft = `${-250 * pos[id]}px`
    } else {
        pos[id]++
        productSlider[id].style.marginLeft = `${-250 * pos[id]}px`
    }
}


const leftButton = document.querySelectorAll('.slider-button.left')
const rightButton = document.querySelectorAll('.slider-button.right')
const whiteBall = document.querySelectorAll('.white-ball-shadow')
const quantProducts = document.querySelectorAll('.product-single')

for (let c = 0 ; c < quantProducts.length ; c++) {
    leftButton[c].addEventListener('mouseenter', () => {
        whiteBall[c].style.background = 'linear-gradient(90deg, #cfcece, transparent, transparent)'
    })
    
    leftButton[c].addEventListener('mouseleave', () => {
        whiteBall[c].style.background = 'none'
    })

    rightButton[c].addEventListener('mouseenter', () => {
        whiteBall[c].style.background = 'linear-gradient(-90deg, #cfcece, transparent, transparent)'
    })
    
    rightButton[c].addEventListener('mouseleave', () => {
        whiteBall[c].style.background = 'none'
    })
}
