function sortNums(arr) {
    let newArr = [];
    for (let num of arr) {
        num < 0 ? newArr.unshift(num) : newArr.push(num);
    }
    newArr.forEach(num => console.log(num));
}

sortNums(['7', '-2', '8', '9']);