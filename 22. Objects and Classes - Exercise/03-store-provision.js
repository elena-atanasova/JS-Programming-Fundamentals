function storeProvision(stock, order) {
    let allProducts = {};

    for (let i = 0; i < stock.length; i = i + 2) {
        let product = stock[i];
        let quantity = stock[i + 1];
        
        allProducts[product] = Number(quantity);
    }

    for (let j = 0; j < order.length; j = j + 2) {
        let product = order[j];
        let quantity = order[j + 1];

        if (!allProducts.hasOwnProperty(product)) {
            allProducts[product] = Number(quantity);
        } else {
            allProducts[product] += Number(quantity);
        }
    }

    for (let [ key, value ] of Object.entries(allProducts)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);