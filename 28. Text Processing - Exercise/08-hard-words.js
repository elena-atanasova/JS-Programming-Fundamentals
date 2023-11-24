function hardWords(arr) {
    let sentence = arr[0];
    let missingWords = arr[1];

    missingWords.sort((a, b) => b.length - a.length);
    for (let w of missingWords) {
        let temp = '_'.repeat(w.length);
        if(sentence.includes(temp)){
            sentence = sentence.replace(temp, w);
        }
    }
    console.log(sentence);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);