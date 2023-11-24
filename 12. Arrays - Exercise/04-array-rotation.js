function rotateArr(arr, num) {

    for (let i = 0; i < num; i++) {
        let first = arr.shift();
        arr.push(first);
    }

    console.log(arr.join(" "));
}

rotateArr([51, 47, 32, 61, 21], 2);