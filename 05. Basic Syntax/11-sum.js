function sumOddNums(n) {
    let num = 1;
    let sum = 0;

    while(n > 0) {
        console.log(num);
        sum += num;
        num = num + 2;
        n--;
    }

    console.log(`Sum: ${sum}`);
}

sumOddNums(5);
sumOddNums(3);