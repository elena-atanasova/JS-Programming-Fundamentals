function removeRepetition(arr) {
    let uniqueArr = arr.filter((num, index) => {
        return arr.indexOf(num) === index;
    });
    return uniqueArr.join(' ');
}

removeRepetition([1, 2, 3, 4]);
removeRepetition([7, 8, 9, 7 , 2, 3, 4, 1, 2]);
removeRepetition([20, 8, 12, 13, 4, 4, 8, 5]);


// Another option
function remove(arr) {
    let uniqueChars = [];
    arr.forEach((num) => {
        if (!uniqueChars.includes(num)) {
            uniqueChars.push(num);
        }
    });

    return uniqueChars.join(' ');
}
