function countEqualNeighbours(matrix) {
    let count = 0;
    //rows
    for (let row = 0; row < matrix.length; row++) {
        // columns
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    count++;
                }
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
        }
    }
    console.log(count);
}


countEqualNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

countEqualNeighbours([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);