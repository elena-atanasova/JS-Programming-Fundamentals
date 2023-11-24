function reverse(n, arr) {
    let output = "";

    for (let i = n - 1; i >= 0; i--) {
        output += `${arr[i]} `
    }

    console.log(output);
}

reverse(3, [10, 20, 30, 40, 50]);



function reverseArr(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    newArr = newArr.reverse();
    newArr = newArr.join(" ");
    console.log(newArr);
}

reverseArr(3, [10, 20, 30, 40]);