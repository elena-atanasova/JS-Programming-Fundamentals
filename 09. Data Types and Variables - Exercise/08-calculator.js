function printResult(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        default:
            result = 0;
            break;
    }

    console.log(result.toFixed(2));
}

printResult(5, "+", 10);