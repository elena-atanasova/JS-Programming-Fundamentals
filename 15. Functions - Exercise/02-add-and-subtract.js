function subtract(x, y, z) {
    return sum(x, y) - z;

    function sum(x, y) {
        return x + y;
    }
}

console.log(subtract(23, 6, 10));



function printResult(x, y, z) {
    
    function sumOfTwoNums(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function substract(sum, thirdNum) {
        return sum - thirdNum;
    }

    let sum = sumOfTwoNums(x, y);
    let finalResult = substract(sum, z);

    console.log(finalResult);
}

printResult(23, 6, 10);