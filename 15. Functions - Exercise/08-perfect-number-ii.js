// Solution using different functions
function isPerfect(num) {
    let output = '';

    // arr
    let divisors = findDivisors(num);
    let perfectSum = sum(divisors);

    output = num === perfectSum ? 'We have a perfect number!' : "It's not so perfect."
    console.log(output);
    
}

isPerfect(6);
isPerfect(28);

function findDivisors(num) {
    let divisors = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}
