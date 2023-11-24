function printMatrix(n) {
    let result = [];

    for (let i = 0; i < n; i++) { 
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(n);
        }  
        result.push(row);
    }
    
    result.forEach(row => console.log(row.join(" ")));
}

printMatrix(7);