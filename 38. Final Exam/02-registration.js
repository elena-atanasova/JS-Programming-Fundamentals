function registration(input) {
    let n = input.shift();
    let pattern = /(U\$)(?<username>[A-Z][a-z]{2,})\1(P\@\$)(?<password>[A-Za-z]{5,}[0-9]+)\3/g;

    let count = 0;
    for (let line of input) {
        if (line.match(pattern)) {
            count++;
            let username = line.split('U$')[1];
            let password = line.split('P@$')[1];
            console.log('Registration was successful');
            console.log(`Username: ${username}, Password: ${password}`);
        } else {
            console.log(`Invalid username or password`);
        }
    }
    console.log(`Successful registrations: ${count}`);
}

registration(["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"
]);