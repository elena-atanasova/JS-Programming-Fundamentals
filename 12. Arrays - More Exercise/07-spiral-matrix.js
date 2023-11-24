function spiralMatrix(totalRows, totalColumns) {
    let result = [];

    // create the 2-dimensional array
    for (let i = 0; i < totalRows; i++) {
        let currentRow = [];
        result.push(currentRow);
    }

    let startColumn = 0;
    let endColumn = totalColumns - 1;

    let startRow = 0;
    let endRow = totalRows - 1;

    let num = 1;    // the number to be printed; to increase until num = totalRows * totalColumns
    
    // while doing a square repeatedly
    while (startColumn <= endColumn && startRow <= endRow) {
        
        // first row
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = num; 
            num++;
        }
        
        startRow++;

        // last column
        for (let i = startRow; i <= endRow; i++) {
            result[i][endColumn] = num;
            num++;
        }

        endColumn--;

        // last row
        for (let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = num; 
            num++;
        }

        endRow--;
        // first column
        for (let i = endRow; i >= startRow; i--) {
            result[i][startColumn] = num; 
            num++;
        }

        startColumn++;
    }
    
    result.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);