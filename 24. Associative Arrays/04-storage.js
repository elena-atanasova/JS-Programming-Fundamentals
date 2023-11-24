function storage(arr) {
    let map = new Map();

    for (const el of arr) {
        let [product, quantity] = el.split(' ');
        quantity = Number(quantity);
        
        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let value = map.get(product);
            let newValue = value + quantity;
            map.set(product, newValue);
        }
    }

    for (const [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40']);