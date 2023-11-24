function piccolo(arr) {
    let carPark = [];

    for (let el of arr) {
        let [direction, carNumber] = el.split(', ');

        if (direction.toUpperCase() === 'IN') {
            if (!carPark.includes(carNumber)) {
                carPark.push(carNumber);
            }
        } else {
            if (carPark.includes(carNumber)) {
                carPark.splice(carPark.indexOf(carNumber), 1);
            }
        }
    }

    let sorted = carPark.sort();
    if (carPark.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        sorted.forEach(car => console.log(car));
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA',
    'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);