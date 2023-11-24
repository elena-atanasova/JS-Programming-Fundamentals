function wordsTracker(arr) {
    let neededWords = arr.shift().split(' ');
    let map = new Map();
    for (let wd of neededWords) {
        map.set(wd, 0);
    }

    for (let word of arr) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurances', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);