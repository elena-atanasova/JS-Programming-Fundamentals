function bombNumbers(seq, specialNum) {
    let bomb = specialNum[0];
    let pow = specialNum[1];
 
    while (seq.includes(bomb)) {
        let index = seq.indexOf(bomb);
        let deleteCount = pow * 2 + 1;
        let start = index - pow;
 
        if (start < 0) {
            deleteCount += start;
            start = 0;
        }
        seq.splice(start, deleteCount);
    }
    
    console.log(seq.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],[7, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1,4,4,2,8,9,1], [9, 2]);