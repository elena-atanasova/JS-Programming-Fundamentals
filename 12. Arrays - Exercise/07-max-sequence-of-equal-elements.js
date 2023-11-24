function maxSeq(arr) {

    // counting the occurrences of each number and put the counts in a new array
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let count = 1;

        for (let j = i + 1; j < arr.length; j++) {
            
            if(arr[i] !== arr[j]) {
                break;
            } else {
                count++;
            }

            // so it counts the occurances the right way
            count > 1 ? i++ : i += 0;  
        }

        newArr.push(count);
    }

   // remove the repeted numbers and put them in a new array
   let modifiedArr = [];
   
   for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== arr[k + 1]) {
        let temp = arr[k];
        modifiedArr.push(temp);
    }
   }

   // find the max number of the occurrences
   let max = Math.max(...newArr);
   // find the index of the max number
   let index = newArr.indexOf(max);

   // the two new arrays woth the number of occurrences and the numbers (without repetitions) are of equal size
   // so use the index of max to get the actual number (cause it is at the same index but in the other array) and print it max times;
    let t = max;
    let output = "";
    while(t > 0) {
        output += `${modifiedArr[index]} `;
        t--;
    }

    console.log(output);
}

maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeq(1, 1, 1, 2, 3, 1, 3, 3);
maxSeq([4, 4, 4, 4]);
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);