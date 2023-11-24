function calculateFuelPrice(distance, passengers, price) {
    let fuel = distance * 7 / 100;
    let totalFuel = fuel + passengers * 0.1;

    let money = totalFuel * price;
    console.log(`Needed money for that trip is ${money} lv.`);
}

calculateFuelPrice(260, 9, 2.49);
calculateFuelPrice(90, 14, 2.88);