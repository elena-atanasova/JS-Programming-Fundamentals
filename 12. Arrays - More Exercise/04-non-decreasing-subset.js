function printSeq(arr) {
    let max = arr[0];     // first element
    let output = [max];
    
    for (let i = 0; i < arr.length; i++) {
        let nextElement = arr[i + 1];
        
        if(max <= nextElement) {
            max = nextElement;
            output.push(max);
        }
    }

    console.log(output.join(" "));
}

printSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
printSeq([1, 2, 3, 4]);
printSeq([20, 3, 2, 15, 6, 1]);