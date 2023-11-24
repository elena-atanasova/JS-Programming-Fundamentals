function wordOccurrences(arr) {
    let map = new Map();

    for (const word of arr) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);