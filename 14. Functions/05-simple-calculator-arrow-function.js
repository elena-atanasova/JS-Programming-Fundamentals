function calculate(x, y, operator) {
    let result;

    switch (operator) {
        case "multiply":
            result = (x, y) => x * y;
            break;
        case "divide":
            result = (x, y) => x / y;
            break;
        case "add":
            result = (x, y) => x + y;
            break;
        case "subtract":
            result = (x, y) => x - y;
            break;

        default:
            break;
    }

    console.log(result(x, y));
}

calculate(5, 5, "multiply");