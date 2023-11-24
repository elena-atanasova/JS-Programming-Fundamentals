function findBiggestNum(num1, num2, num3) {
    let biggestNum = num1;
    
    if (num1 > num2 && num1 > num3) {
        biggestNum = num1;
    } else if (num2 > num3 && num2 > num1){
        biggestNum = num2;
    } else {
        biggestNum = num3;
    }

    console.log(biggestNum);
}

findBiggestNum(-2, 7, 3);
findBiggestNum(130, 5, 99);
findBiggestNum(43, 43.2, 43.1);


function maxNum(num1, num2, num3) {
    let biggestNumber = Math.max(num1, num2, num3);
    console.log(biggestNumber);
}

maxNum(-2, 7, 3);