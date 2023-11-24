function maxNums(array) {
    let topNums = [];

    for (let i = 0; i < array.length; i++) {
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTop = false;
                break;
            }
        }

        if(isTop === true) {
            topNums.push(array[i]);
        }
    }
    console.log(topNums.join(" "));
}

maxNums([1, 4, 3, 2]);
maxNums([41, 34, 20]);