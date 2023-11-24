function calculate(x, y, operator) {

    let result = 0;

    switch (operator) {
        case "multiply":
            result = multiply(x, y);
            break;
        case "divide":
            result = divide(x, y);
            break;
        case "add":
            result = add(x, y);
            break;
        case "subtract":
            result = subtract(x, y);
            break;

        default:
            break;
    }

    console.log(result);

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        return x / y;
    }

    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }
}

calculate(5, 5, "multiply");