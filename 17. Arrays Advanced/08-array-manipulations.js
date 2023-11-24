function manipulateArr(arr) {
    let numbers = arr[0].split(' ').map(Number);
    let commands = arr.slice(1, arr.length);

    for (let i = 0; i < commands.length; i++) {
        let [instruction, value, index] = commands[i].split(' ');
        value = Number(value);
        index = Number(index);

        switch (instruction) {
            case "Add":
                numbers.push(value);
                break;
            case "Remove":
                numbers = numbers.filter(x => x !== value);
                break;
            case "RemoveAt":
                numbers.splice(value, 1);
                break;
            case "Insert":
                numbers.splice(index, 0, value);
                break;

            default:
                break;
        }
    }

    return numbers.join(" ");
}

console.log(manipulateArr(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']));
console.log(manipulateArr(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']));