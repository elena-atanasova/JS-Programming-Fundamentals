function sumDiff(nums) {
    let sumEven = 0;
    let sumOdd = 0;

    for(let num of nums) {
        num = Number(num);
        num % 2 === 0 ? sumEven += num : sumOdd += num;
    }

    let diff = sumEven - sumOdd;
    console.log(diff);
}

sumDiff([1,2,3,4,5,6]);
sumDiff([3,5,7,9]);