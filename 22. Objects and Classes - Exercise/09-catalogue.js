function catalogue(arr) {
    let product = {};

    for (let el of arr) {
        let [name, price] = el.split(' : ');
        product[name] = +price;
    }

    let sortedKeys = Object.keys(product);
    sortedKeys = sortedKeys.sort((a, b) => a.localeCompare(b));

    let letter = sortedKeys[0][0];
    console.log(letter);

    sortedKeys.forEach(element => {
        let price = product[element];
        if (element[0] === letter) {
            //console.log(letter);
            console.log(`  ${element}: ${price}`);
        } else {
            letter = element[0];
            console.log(letter);
            console.log(`  ${element}: ${price}`);
        }
    });
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);