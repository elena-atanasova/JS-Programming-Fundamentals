function rosettaStone(array) {
    let matrixLength = +array.shift();
    let decodeMatrix = array.slice(0, matrixLength).map(str => str.split(' ').map(Number));
    let encodedMessage = array.slice(matrixLength, array.length).map(str => str.split(' ').map(Number));

    let result = [];

    let letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < encodedMessage.length; i++) {
        let row = [];
        for (let j = 0; j < encodedMessage[i].length; j++) {
            if (i < decodeMatrix.length && j < decodeMatrix[0].length) {
                let sum = decodeMatrix[i][j] + encodedMessage[i][j];
                row.push(sum);
            }

            if (i < decodeMatrix.length && j >= decodeMatrix[0].length) {
                let newJ = j - decodeMatrix[0].length;
                while (newJ > decodeMatrix[0].length - 1) {
                    newJ -= decodeMatrix[0].length;
                }
                let sum = decodeMatrix[i][newJ] + encodedMessage[i][j];
                row.push(sum);
            }

            if (i >= decodeMatrix.length && j < decodeMatrix[0].length) {
                let newI = i - decodeMatrix.length;
                while (newI > decodeMatrix.length - 1) {
                    newI -= decodeMatrix.length;
                }
                let sum = decodeMatrix[newI][j] + encodedMessage[i][j];
                row.push(sum);
            }

            if (i >= decodeMatrix.length && j >= decodeMatrix[0].length) {
                let newI = i - decodeMatrix.length;
                let newJ = j - decodeMatrix[0].length;
                while (newJ > decodeMatrix[0].length - 1) {
                    newJ -= decodeMatrix[0].length;
                }
                while (newI > decodeMatrix.length - 1) {
                    newI -= decodeMatrix.length;
                }
                let sum = decodeMatrix[newI][newJ] + encodedMessage[i][j];
                row.push(sum);
            }
        }
        result.push(row);
    }

    result = result.flat();
    let output = [];

    result.forEach(element => {
        while (element > 26) {
            element -= 27;
        }
        element = letters[element];
        output.push(element);
    });

    console.log(output.join(''));
}

rosettaStone(['1',

    '1 3 13',

    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);






