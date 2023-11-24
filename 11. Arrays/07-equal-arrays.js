function areEqual(arr1, arr2) {
    let index = 0;
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        if(Number(arr1[i]) !== Number(arr2[i])) {
            index = i;
            areEqual = false;
            break;
        } else {
            sum += Number(arr1[i]);
        }
    }

    if(areEqual === true){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}

areEqual(['10','20','30'], ['10','20','30']);
areEqual(['1','2','3','4','5'], ['1','2','4','4','5']);