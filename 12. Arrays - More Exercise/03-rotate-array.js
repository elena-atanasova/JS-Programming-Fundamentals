function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1]);
    let newArr = arr.slice(0, arr.length - 1);

    for (let i = 0; i < rotations; i++) {
        
        let lastElement = newArr[newArr.length - 1];
        newArr.unshift(lastElement);
        newArr.pop(lastElement);
    }

    console.log(newArr.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);