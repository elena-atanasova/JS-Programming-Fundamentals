function hashtag(str) {
    let words = [];
    let array = str.split(' ');

    for (let w of array) {
        if(w.startsWith('#')) {
            w = w.slice(1, w.length)
            if (w.length > 0) {
            words.push(w);
            }
        }
    }

    for (let w of words) {
        if (/^[a-zA-Z]+$/.test(w)) {
            console.log(w);
        }
    }
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');