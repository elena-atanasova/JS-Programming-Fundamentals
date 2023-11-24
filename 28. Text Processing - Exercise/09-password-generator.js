function passwordGenerator(arr) {
    let firstStr = arr[0];
    let secondStr = arr[1];
    let word = arr[2];

    let concatination = firstStr.concat(secondStr).toLowerCase();
    let index = 0;
    for (let ch of concatination) {
        if (ch.match(/[aeiou]/gi)) {
            if (index === word.length) {
                index = 0;
            }
            replacement = word[index].toUpperCase();
            index++;
            concatination = concatination.replace(ch, replacement); 
        }
    }

    let result = concatination.split('').reverse().join('');
    console.log(`Your generated password is ${result}`);
}

passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
    ]);