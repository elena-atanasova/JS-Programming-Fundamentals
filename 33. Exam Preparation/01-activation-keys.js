function activationKeys(input) {
    let key = input.shift();
    
    while (input[0] != 'Generate') {
        let command = input.shift();
        if (command.includes('Contains')) {
            let [_, substr] = command.split('>>>');
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log(`Substring not found!`);
            }  
        } else if (command.includes('Flip')) {
            let [_, letterCase, start, end] = command.split('>>>')
            let substr = key.substring(start, end);
            if (letterCase == 'Upper') {
                key = key.replace(substr, substr.toUpperCase());
            } else {
                key = key.replace(substr, substr.toLowerCase());
            }
            console.log(key);
        } else if (command.includes('Slice')) {
            let [_, start, end] = command.split('>>>');
            let substr = key.substring(start, end);
            key = key.replace(substr, '');
            console.log(key);
        }
    }
    
    if (input[0] == 'Generate') {
        console.log(`Your activation key is: ${key}`);
    }
}


activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]));