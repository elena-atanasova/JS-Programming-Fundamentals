function diagonalAttack(arr) {

    // transform the array into matrix
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        let element = [];
        element = arr[i].split(" ");
        matrix.push(element);
    }

    // sum of the numbers of the left and the right diagonals
    let leftSum = 0;
    let rightSum = 0;

    let leftCounter = 0;
    let rightCounter = matrix[0].length - 1;

    // loop to go through all the rows and find the sums of the two diagonals
    for (let i = 0; i < matrix.length; i++) {

        leftSum += Number(matrix[i][leftCounter]);
        rightSum += Number(matrix[i][rightCounter]);

        leftCounter++;
        rightCounter--;
    }

    // boolean if the sums are equal or not
    let isEqual = leftSum === rightSum ? true : false;

    if (isEqual === true) {

        leftCounter = 0;
        rightCounter = matrix[0].length - 1;
        
        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {
                
                let currentElement = matrix[i][j];

                if (j !== leftCounter && j !== rightCounter) {
                    currentElement = leftSum;
                    matrix[i][j] = currentElement;
                }        
            }

            leftCounter++;
            rightCounter--;
        }

    }

    // printing the final result
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));   
    }
}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);

diagonalAttack(['1 1 1', 
                '1 1 1', 
                '1 1 0']);