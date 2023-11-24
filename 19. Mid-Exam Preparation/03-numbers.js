function printNums(nums) {
    nums = nums.split(' ').map(Number);
    
    let average = nums.reduce((prev, curr) => prev + curr, 0) / nums.length;
    let greaterValues = nums.filter(x => x > average);
    greaterValues.sort((a, b) => b - a);
    
    if (greaterValues.length > 0) {
        console.log(greaterValues.slice(0, 5).join(' '));
    } else if (greaterValues.length === 0) {
        console.log('No');
    }
}

printNums('10 20 30 40 50');