function sum(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let type = sum % 1 === 0 ? "Integer" : "Float";
    console.log(`${sum} - ${type}`);
}

sum(9, 100, 1.1);
sum(100, 200, 303);