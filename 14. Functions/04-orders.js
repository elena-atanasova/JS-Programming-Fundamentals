function makeOrder(item, amount) {
    let price = 0;
    
    switch (item) {
        case "water":
            price = 1;
            break;
        case "coffee":
            price = 1.50;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2.00;
            break;
        default:
            break;
    }

    let totalPrice = (price, amount) => (price * amount).toFixed(2);
    console.log(totalPrice(price, amount));
}

makeOrder("water", 5);