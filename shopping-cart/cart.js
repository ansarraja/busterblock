const basketDisplay = $('#basket-display');
const isLoggedIn = localStorage.getItem('login');
const getBasket = JSON.parse(localStorage.getItem('basket'));


if(!isLoggedIn) {
    basketDisplay.empty();

    let loginAsk = $('<h2>');
    loginAsk.text("Please log in to see your basket");

    let signInLink = $('<a>');
    signInLink.attr('href', '../sign-in/sign-in.html');
    signInLink.text("Sign-in/Sign-up");

    basketDisplay.append(loginAsk, signInLink);
}

else if(!getBasket) {
    basketDisplay.empty();

    let emptyBasketEl = $('<h2>').text('Basket empty!');

    basketDisplay.append(emptyBasketEl);
}

else {
    basketDisplay.empty();

    let welcomeUser = $('<h2>');
    welcomeUser.text(`Welcome ${isLoggedIn}, here is your shopping basket!`);

    basketDisplay.append(welcomeUser);

    let basketContainer = $('<div>');
    basketContainer.addClass('basket-container');

    let total = 0;

    for(let i = 0; i < getBasket.length; i++) {

        let itemContainer = $('<div>');
        itemContainer.addClass('items-container d-flex justify-content-between align-items-center')

        let itemName = getBasket[i].filmName;

        let price = `£${getBasket[i].price}`;

        total += getBasket[i].price;

        let itemNameEl = $('<p>').text(itemName);
        itemNameEl.addClass('item-name-el')

        let priceEl = $('<p>').text(price);
        priceEl.addClass('price-el')

        let breakEl = $('<hr>');

        itemContainer.append(itemNameEl, priceEl);

        basketContainer.append(itemContainer, breakEl);

    }

    let totalEl = $('<p>').text(`Total: £${total}`)
    totalEl.addClass('total-el')

    let payBtn = $('<button>').text('Pay Now');
    payBtn.addClass('pay-button');

    payBtn.on('click', () => {

        localStorage.removeItem('basket');

        basketDisplay.empty();

        let paidMessage = $('<h2>').text(`Thank you for your payment ${isLoggedIn}, have a nice day!`)

        basketDisplay.append(paidMessage);

    })


    basketDisplay.append(basketContainer, totalEl, payBtn);



}




