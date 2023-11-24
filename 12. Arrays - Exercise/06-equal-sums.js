function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let areEqual = false;

    let i = 0;
    while(i < arr.length) {
        leftSum = 0;
        rightSum = 0;

        // right sum
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        // left sum
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        if(rightSum === leftSum) {
            console.log(i);
            areEqual = true;
        } 

        i++;
    }

    if(areEqual === false) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
