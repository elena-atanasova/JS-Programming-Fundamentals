function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let currentElement = result.slice(start, start + k).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    console.log(result.join(" "));
}

lastKNumbersSequence(6, 3);
