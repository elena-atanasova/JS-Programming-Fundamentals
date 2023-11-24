function reverseArr(arr) {
    let reverseArr = arr.reverse();
    
    for (let i = 0; i < reverseArr.length; i++) {
        console.log(reverseArr[i]);
    }
}

function reverseArray(arr) {
    let reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) { 
        reversedArr.push(arr[i]); 
    }

    for (let j = 0; j < reversedArr.length; j++) { 
        console.log(reversedArr[j]);
    }
}

reverseArr([2, 1, 3]);
reverseArray([-2, 1, 3]);