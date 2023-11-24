function calculateSums(number) {
    let evenSum = 0;
    let oddSum = 0;
    
    while (number >= 1) {
        let num = number % 10;
        num % 2 === 0 ? evenSum += num : oddSum += num;
        
        number = Math.floor(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

calculateSums(1000435);
calculateSums(3495892137259234);