function decodeMessage(input) {
    let message = input.shift();

    while (input[0] !== 'Decode') {
        let [action, ...instructions] = input.shift().split('|');

        if (action === 'Move') {
            let [numberOfLetters] = instructions;
            numberOfLetters = Number(numberOfLetters);
            
            message = message.split('');
            let str = message.splice(0, numberOfLetters);
            message = message.concat(str).join('');
        } else if (action === 'Insert') {
            let [index, val] = instructions;
            message = message.split('');
            message.splice(index, 0, val);
            message = message.join('');
        } else {
            let [substr, replacement] = instructions;
            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

decodeMessage([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);