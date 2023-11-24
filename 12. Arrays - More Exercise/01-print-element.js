function printElement(arr) {
    let step = Number(arr[arr.length - 1]);
    let output = [];

    for (let i = 0; i < arr.length - 1; i = i + step) {
        output.push(arr[i]);
    }

    output = output.join(" ");
    console.log(output);

}

printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'test', '2']);
printElement(['1', '2', '3', '4', '5', '6']);