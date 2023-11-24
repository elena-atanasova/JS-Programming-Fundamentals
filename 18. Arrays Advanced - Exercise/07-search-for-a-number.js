function manipulateArr(numbers, manipulations) {
    numbers = numbers.slice(0, manipulations[0]);
    numbers.splice(0, manipulations[1]);
    let count = 0;
    
    for (let num of numbers) {
        if (num === manipulations[2]) {
            count++;
        }
    }

    console.log(`Number ${manipulations[2]} occurs ${count} times.`);
}

manipulateArr([5, 2, 3, 4, 1, 6], [5, 2, 3]);