function revealWords(words, sentence) {
    words = words.split(', ');

    for (let w of words) {
        let censored = '*'.repeat(w.length);
        sentence = sentence.replace(censored, w);
    }

    console.log(sentence);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');