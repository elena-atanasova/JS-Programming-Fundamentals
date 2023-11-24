function censoredWords(sentence, word) {
    let censored = '*'.repeat(word.length);
    let text = sentence.replace(word, censored);
    while(text.includes(word)){
        text = text.replace(word, censored);
    }
    console.log(text);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hided word hided', 'hided');