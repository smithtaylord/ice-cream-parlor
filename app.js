// variables

const iceCreams = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

let cart = []


// Functions

function drawToppings() {
    // console.log('drawToppings');
    let toppingElem = document.getElementById('toppings')
    let template = ''

    toppings.forEach(t => {
        template += `
    <div class="col-4">
    <div class="card" >
    <img src="${t.image}" alt="" class"" onclick="addToCart('${t.name}',toppings)">
    <div class="d-flex justify-content-around">
    <p>${t.name}</p>
    <p>$${t.price}</p>
    </div>
    </div>
    </div>`

    })
    toppingElem.innerHTML = template
}

function drawVessels() {
    // console.log('drawVessels');
    let vesselElem = document.getElementById('vessels')
    let template = ''

    vessels.forEach(v => {
        template += `
        <div class="col-4">
        <div class="card" >
        <img src="${v.image}" alt="" onclick="addToCart('${v.name}',vessels)">
        <div class="d-flex justify-content-around">
        <p>${v.name}</p>
        <p>$${v.price}</p>
        </div>
        </div>
        </div>`
    })

    vesselElem.innerHTML = template
}

function drawIceCream() {
    // console.log('drawIceCream');
    let iceCreamElem = document.getElementById('iceCreams')
    let template = ''

    iceCreams.forEach(i => {
        template +=
            `
        <div class="col-4">
        <div class="card" >
        <img src="${i.image}" alt="" onclick="addToCart('${i.name}',iceCreams)">
        <div class="d-flex justify-content-around">
        <p>${i.name}</p>
        <p>$${i.price}</p>
        </div>
        </div>
        </div>`
    })
    iceCreamElem.innerHTML = template
}

function drawCart() {
    // console.log('drawCart');
    let cartElem = document.getElementById('cart')
    let cartTotalElem = document.getElementById('total')
    let template = ''

    cart.forEach(c => {
        template += `
        <div class="row">
        <div class="col-6">
            <p>${c.name}</p>
        </div>
        <div class="col-2">
            <p>${c.qty}</p>
        </div>
        <div class="col-2">
            $${c.price}
        </div>
        <div class="col-2">
           $${(c.price * c.qty)}
        </div>
        </div>
    `
    })
    cartElem.innerHTML = template
    let total = calculateTotal()

    cartTotalElem.innerText = total


}

function addToCart(name, array) {
    // console.log('addToCart', name);
    let itemToAdd = array.find(p => p.name == name)
    let alreadyInCart = cart.find(p => p.name == name)

    if (alreadyInCart) {
        alreadyInCart.qty++
    } else {
        cart.push({
            name: itemToAdd.name,
            price: itemToAdd.price,
            qty: 1
        })
    }
    drawCart()
}

function calculateTotal() {
    console.log('calculateTotal');
    let total = 0

    cart.forEach(p => {
        total += p.price * p.qty
    })

    return total
}

function pay() {
    cart = []
    drawCart()
}

function removeCartItem() {
    console.log('removeCartItem');
}


drawToppings()
drawVessels()
drawIceCream()
drawCart()