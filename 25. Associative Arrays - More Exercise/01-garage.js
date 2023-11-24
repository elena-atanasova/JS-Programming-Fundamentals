function garage(arr) {
    let garage = {};

    for (let el of arr) {
        let [garageNo, car] = el.split(' - ');

        if (!garage.hasOwnProperty(garageNo)) {
            garage[garageNo] = [];
            garage[garageNo].push(car);
        } else {
            garage[garageNo].push(car);
        }
    }

    for (let [key, value] of Object.entries(garage)) {
        console.log(`Garage № ${key}`);
        value.forEach(element => {
            element = element.replace(/:/g, ' -');
            console.log(`--- ${element}`);
        });
    }
}

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);