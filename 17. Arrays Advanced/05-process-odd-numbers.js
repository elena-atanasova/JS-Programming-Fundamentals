function processOddNums(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i]);
        }
    }

    result = result.map(x => x * 2);
    result = result.reverse().join(' ');
    console.log(result);
}

processOddNums([10, 15, 20, 25]);

// Better option
function solve(arr) {
    let result = arr.filter((num, i) => i % 2 == 1).map(x => 2*x).reverse();
    return result.join(' ');
}

console.log(solve([10, 15, 20, 25]));