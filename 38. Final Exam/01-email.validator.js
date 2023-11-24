function validateEmail(input) {
    let email = input.shift();

    while (input[0] !== 'Complete') {
        let command = input.shift();

        let [action, ...rest] = command.split(' ');
        if (action === 'Make') {
            if (rest[0] === 'Upper') {
                email = email.toUpperCase();
            } else {
                email = email.toLowerCase();
            }
            console.log(email);
        } else if (action === 'GetDomain') {
            let [count] = rest;
            let lastChars = email.slice(-count);
            console.log(lastChars);
        } else if (action === 'GetUsername') {
            if (email.includes('@')) {
                let temp = email.split('@');
                let username = temp[0];
                console.log(username);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        } else if (action === 'Replace') {
            let [char] = rest;
            while (email.includes(char)) {
                email = email.replace(char, '-');
            }
            console.log(email);
        } else if (action === 'Encrypt') {
            let output = [];
            for (let c of email) {
                let ascii = c.charCodeAt(0);
                output.push(ascii);
            }
            console.log(output.join(' '));
        }
    }
}

validateEmail((["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"])
);

validateEmail((["Another@Mail.com", 
"Make Lower", 
"GetUsername", 
"GetDomain 3", 
"Encrypt", 
"Complete"]) 
);