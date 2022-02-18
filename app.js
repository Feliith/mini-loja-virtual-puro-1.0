
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
        url: 'img/t-shirt-0',
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
    const storeConteiner = document.querySelector('.store')

    items.map((props, index) => {
        storeConteiner.innerHTML += `
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
                        <img src="${props.url + 1}.png" class="product-image"/>
                        <img src="${props.url + 2}.png" class="product-image"/>
                        <img src="${props.url + 3}.png" class="product-image"/>
                    </div>
                </div>
                <h3 class="product-name">${props.title} - ${props.price}</h3>
                <button class="cart-btn">Adicionar ao carrinho</button>
            </div>
        `
    })
}
Store()

const productSlider = document.querySelectorAll('.product-slider')
let pos = 0

leftBtn = (id) => {
    if (pos == 0) {
        pos = 2
        productSlider[id].style.marginLeft = `${-250 * pos}px`
    } else {
        pos--
        productSlider[id].style.marginLeft = `${-250 * pos}px`
    }
}

rightBtn = (id) => {
    if (pos == 2) {
        pos = 0
        productSlider[id].style.marginLeft = `${-250 * pos}px`
    } else {
        pos++
        productSlider[id].style.marginLeft = `${-250 * pos}px`
    }
}


const leftButton = document.querySelectorAll('.slider-button.left')
const rightButton = document.querySelectorAll('.slider-button.right')
const whiteBall = document.querySelectorAll('.white-ball-shadow')
const quantProducts = document.querySelectorAll('.product-single')

for (let c = 0 ; c < quantProducts.length ; c++) {
    leftButton[c].addEventListener('mouseenter', () => {
        whiteBall[c].style.background = 'linear-gradient(90deg, #808080, transparent, transparent)'
    })
    
    leftButton[c].addEventListener('mouseleave', () => {
        whiteBall[c].style.background = 'none'
    })

    rightButton[c].addEventListener('mouseenter', () => {
        whiteBall[c].style.background = 'linear-gradient(-90deg, #808080, transparent, transparent)'
    })
    
    rightButton[c].addEventListener('mouseleave', () => {
        whiteBall[c].style.background = 'none'
    })
}