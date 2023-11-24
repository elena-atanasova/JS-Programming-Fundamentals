function calculateSpice(startingYield) {
    let yield = startingYield;
    let day = 0;
    let sum = 0;

    while(yield >= 100) {
        day++;
        day == 1 ? sum += startingYield : sum += 0;
        day > 1 ? sum += yield : sum += 0;

        yield -= 10;
        sum -= 26;
    }

    if(yield < 100) {
        sum -= 26;
    }

    if(sum < 0) {
        sum = 0;
    }

    console.log(day);
    console.log(sum);
}

calculateSpice(111);
calculateSpice(450);