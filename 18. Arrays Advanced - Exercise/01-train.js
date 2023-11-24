function train(arr) {
    let train = arr[0].split(' ').map(Number);
    let maxCapacity = Number(arr[1]);
    let commands = arr.slice(2, arr.length);

    for (let i = 0; i < commands.length; i++) {
        let currCommand = commands[i].split(' ');
        let instruction;
        let passengers;
        if (currCommand.length > 1) {
            instruction = currCommand[0];
            passengers = Number(currCommand[1]);
            if (instruction === 'Add') {
                train.push(passengers);
            }
        } else {
            passengers = Number(currCommand[0]);
            for (let j = 0; j < train.length; j++) {
                if(maxCapacity - train[j] >= passengers) {
                    train[j] += passengers;
                    break;
                }
                
            }
        }
    }
    
    return train.join(' ');
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);