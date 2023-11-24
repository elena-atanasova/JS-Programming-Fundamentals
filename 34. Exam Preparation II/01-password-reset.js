function resetPassword(input) {
    let rawPw = input.shift();
  
    let i = 0;
    let command = input[i];
    while (command != 'Done') {
        if (command == 'TakeOdd') {
            let newPw = '';
            for (let j = 0; j < rawPw.length; j++) {
                if (j % 2 !== 0) {
                    newPw += rawPw[j];
                }
            }
            rawPw = newPw;
            console.log(newPw);
        } else if (command.includes('Cut')) {
            let [_, index, length] = command.split(' ');
            index = Number(index);
            length = Number(length);
            let endIndex = index + length;
            let substr = rawPw.slice(index, endIndex);
            rawPw = rawPw.replace(substr, '');
            console.log(rawPw);
        } else {
            let [_, substr, substitude] = command.split(' ');
            if (rawPw.includes(substr)) {
                while (rawPw.includes(substr)) {
                    rawPw = rawPw.replace(substr, substitude);
                }
                console.log(rawPw);
            } else {
                console.log('Nothing to replace!');
            }
        }

        i++;
        command = input[i];
    }

    if (command == 'Done') {
        console.log(`Your password is: ${rawPw}`);
    }
}

resetPassword((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));