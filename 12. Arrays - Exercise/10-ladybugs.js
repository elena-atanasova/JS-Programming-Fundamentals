function ladybugs(arr) {
    let fieldSize = Number(arr[0]);
    let ladybugsIndexes = arr[1];
    ladybugsIndexes = ladybugsIndexes.split(" ");
    let commands = arr.slice(2);
    let field = [];     // array to represent the field for the ladybugs

    // fill the array with 0s
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    // the positions of the array where there is a ladybug = 1;
    for (let i = 0; i < ladybugsIndexes.length; i++) {
        let position = Number(ladybugsIndexes[i]);
        
        if (position >= 0 && position < field.length) {
            field[ladybugsIndexes[i]] = 1;
        }
    }

    // go through the commands
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        currentCommand = currentCommand.split(" ");
        
        let start = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let end = Number(currentCommand[2]);

        if (field[start] === 0 || start < 0 || start > field.length - 1) {
            continue;
        }

        field[start] = 0;
        
        if(end < 0) {
            if(direction === "right") {
                direction = "left";
                end = Math.abs(end);
            }            
        }

        let nextPosition = 0;
   
        if (direction === "right") {
            nextPosition = start + end;
        } else if (direction === "left") {
            nextPosition = start - end;
        }
        
        while (field[nextPosition] === 1) {
            if (direction === "right") {
                nextPosition += end;
            } else {
                nextPosition -= end;
            }
        }

        if (nextPosition > field.length - 1 || nextPosition < 0) {
            continue;
        }

        field[nextPosition] = 1;
    }

    field = field.join(" ");
    console.log(field);
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);