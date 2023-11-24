function sum(numbers) {
    let sum = 0;

    for (let num of numbers) {
        num = Number(num);
        num % 2 == 0 ? sum += num : sum += 0;
    }

    console.log(sum);
}

sum(['1','2','3','4','5','6']);