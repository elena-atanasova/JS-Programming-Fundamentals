function findPerfectNum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = n % i === 0 ? sum += i : sum += 0;
    }

    let output = n === sum ? "We have a perfect number!" : "It's not so perfect.";
    console.log(output);
}

findPerfectNum(6);