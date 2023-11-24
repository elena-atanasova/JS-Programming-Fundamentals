function isPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        let isPalindrome = true;
        let currNumArr = arr[i].toString().split("");
        for (let j = 0; j < Math.floor(currNumArr.length / 2); j++) {
            if (currNumArr[j] === currNumArr[currNumArr.length - 1 - j]) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
                break;
            }
        }

        console.log(isPalindrome);
    }
}

isPalindrome([123,323,421,121]);
