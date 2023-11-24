function strSubstr(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    text = text.split(' ');

    let found = text.find(w => w === word);
    if (found === undefined) {
        console.log(`${word} not found!`);
    } else {
        console.log(word);
    }
}

strSubstr('javascript', 'JavaScript is the best programming language');
strSubstr('python', 'JavaScript is the best programming language');