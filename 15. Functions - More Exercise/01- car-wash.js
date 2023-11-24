function cleanCar(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case "soap":
                sum += 10;
                break;
            case "water":
                sum += 0.2 * sum;
                break;
            case "vacuum cleaner":
                sum += 0.25 * sum;
                break;
            case "mud":
                sum -= 0.1 * sum;
                break;
            default:
                break;
        }
    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}

cleanCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);