function airPollution(arr, forces) {
    let matrix = arr.map(row => row.split(' ').map(Number));

    for (let i = 0; i < forces.length; i++) {
        let [force, index] = forces[i].split(' ');
        index = Number(index);

        switch (force) {
            case 'breeze':
                for (let j = 0; j < 5; j++) {
                    matrix[index][j] -= 15;
                    if (matrix[index][j] < 0) {
                        matrix[index][j] = 0;
                    }
                }
                break;
            case 'gale':
                for (let j = 0; j < 5; j++) {
                    matrix[j][index] -= 20;
                    if (matrix[j][index] < 0) {
                        matrix[j][index] = 0;
                    }
                }
                break;
            case 'smog':
                for (let j = 0; j < 5; j++) {
                    for (let k = 0; k < 5; k++) {
                        matrix[j][k] += index;
                    }
                }
                break;

            default:
                break;
        }
    }

    let result = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrix[i][j] >= 50) {
                let temp = `[${i}-${j}]`;
                result.push(temp);
            }
        }
    }
    if (result.length === 0) {
        console.log(`No polluted areas`);
    } else {
        result = result.join(', ');
        console.log(`Polluted areas: ${result}`);
    }
}


airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
);