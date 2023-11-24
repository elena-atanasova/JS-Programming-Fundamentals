function login(input) {
    let username = input[0];
    let password = username.split("").reverse().join("");

    let i = 1;
    let attempt = input[i];

    let count = 0;

    while(attempt !== password) {
        attempt = input[i];
        count++;

        if(attempt === password) {
            break;
        }

        if(count < 4) {
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`Username ${username} blocked!`);
            break;
        }

        i++;
    }

    if(attempt === password){
        console.log(`User ${username} logged in.`);
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo', 'omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])