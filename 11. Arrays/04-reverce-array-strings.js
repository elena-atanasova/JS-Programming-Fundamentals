function reverseStr(arr) {
    for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }

    let output = arr.join(" ");
    console.log(output);
}

reverseStr(['a', 'b', 'c', 'd', 'e']);