function printValue(arr) {
    let text = arr.shift();
    let letterCase = arr[0];
    let sum = 0;
    if (letterCase === 'UPPERCASE') {
        for (let ch of text) {
            if (ch.match(/(?=[A-Z])/)) {
                sum += ch.charCodeAt(0);
            }
        }
    } else if (letterCase === 'LOWERCASE') {
        for (let ch of text) {
            if (ch.match(/(?=[a-z])/)) {
                sum += ch.charCodeAt(0);
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

printValue(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']);