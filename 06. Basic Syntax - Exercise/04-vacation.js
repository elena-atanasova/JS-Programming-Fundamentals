function calculateVacationPrice(numOfPeople, type, day) {
    let price;

    if (type == "Students" && day == "Friday") {
        price = 8.45;
    } else if (type == "Students" && day == "Saturday") {
        price = 9.80;
    } else if (type == "Students" && day == "Sunday") {
        price = 10.46;
    } else if (type == "Business" && day == "Friday") {
        price = 10.90;
    } else if (type == "Business" && day == "Saturday") {
        price = 15.60;
    } else if (type == "Business" && day == "Sunday") {
        price = 16;
    } else if (type == "Regular" && day == "Friday") {
        price = 15;
    } else if (type == "Regular" && day == "Saturday") {
        price = 20;
    } else if (type == "Regular" && day == "Sunday") {
        price = 22.50;
    }

    let totalPrice = numOfPeople * price;

    if (type == "Students" && numOfPeople >= 30) {
        totalPrice = 0.85 * totalPrice;
    } else if (type == "Business" && numOfPeople >= 100) {
        totalPrice = totalPrice - 10 * price;

    } else if (type == "Regular" && (numOfPeople >= 10 && numOfPeople <= 20)) {
        totalPrice = 0.95 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateVacationPrice(30, "Students", "Sunday");
calculateVacationPrice(40, "Regular", "Saturday");