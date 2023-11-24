function mergeArrays(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let sum = 0;
        
        if(i % 2 === 0) {
            sum = Number(arr1[i]) + Number(arr2[i]);
        } else {
            sum = arr1[i].toString() + arr2[i].toString();
        }

        newArr.push(sum); 
    }

    let output = newArr.join(" - ");
    console.log(output);
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);