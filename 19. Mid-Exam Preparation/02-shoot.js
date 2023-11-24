function countShoots(array) {
    let targets = array.shift().split(' ').map(Number)
    let count = 0;

    let i = 0;
    let alreadyShot = [];
    while (array[i] != 'End') {
        let index = array[i];
        i++;

        if (alreadyShot.includes(index)) {
            continue;
        }

        if (index < 0 || index >= targets.length) {
            continue;
        }

        count++;
        let curr = targets[index];
        targets[index] = -1;
        for (let j = 0; j < targets.length; j++) {
            if(targets[j] != -1 && targets[j] > curr) {
                targets[j] -= curr;
            } else if (targets[j] != -1 && targets[j] <= curr){
                targets[j] += curr;
            }
        }
        alreadyShot.push(index);
    }

    targets = targets.join(' ');
    console.log(`Shot targets: ${count} -> ${targets}`);
}

countShoots((["24 50 36 70", "0", "4", "3", "1", "End"]));