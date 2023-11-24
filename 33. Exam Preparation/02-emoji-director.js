function emojiDirector(input) {
    let text = input[0];
    let reg = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
    let digitReg = /\d/g;

    let digits = text.match(digitReg);
    let threshold = 1;
    digits.map(d => threshold *= Number(d));
    console.log(`Cool threshold: ${threshold}`);

    let validEmoji;
    let emojis = [];
    while (validEmoji = reg.exec(text)) {
        emojis.push(validEmoji);
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    
    for (let emoji of emojis) {
        let text = emoji[2];
        let fullText = emoji[0];
        let coolness = 0;
        for (let letter of text) {
            coolness += letter.charCodeAt();
        }
        if (coolness > threshold) {
            console.log(fullText);
        }
    }
}

emojiDirector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);