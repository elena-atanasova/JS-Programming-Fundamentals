function sum(arr) {
    arr = arr.map(Number);
    let sum = arr[0] + arr.pop();
    console.log(sum);
}

sum(['20', '30', '40']);
sum(['5', '10']);