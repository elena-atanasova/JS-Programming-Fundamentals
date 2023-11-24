function sortNums(arr) {
    let sort = arr.sort();
    let reverse = sort.reverse()

    for (let i = 0; i < reverse.length; i++) {
        console.log(reverse[i]);
    }
}

sortNums([5,2,3])


function sortNumbers(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    for (let k = 0; k < array.length; k++) {
        console.log(array[k]);
    }
}

sortNumbers([4,6,2,1]);