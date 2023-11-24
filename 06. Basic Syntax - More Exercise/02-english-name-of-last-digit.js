function printDigitName(num) {
    let arr = num.toString().split("");
    let lastDigit = 0;

    if (arr.length === 1) {
        lastDigit = Number(arr[0]);
    } else {
        lastDigit = Number(arr[arr.length - 1]);
    }

    switch (lastDigit) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        case 0:
            console.log("zero");
            break;
        default:
            console.log("Error!");
    }
}

printDigitName(512);
printDigitName(1);
printDigitName(1643);