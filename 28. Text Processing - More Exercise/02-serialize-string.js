function serialize(arr) {
    let str = arr[0].split('');
    let uniqueLetters = Array.from(new Set(str));
    
    let indexes = [];
    let map = new Map();
    for (let i = 0; i < uniqueLetters.length; i++) {
        let unique = uniqueLetters[i];

        for (let j = 0; j < str.length; j++) {
            let letter = str[j];

            if(unique === letter) {
                indexes.push(j);
            }
        }
        
        map.set(unique, indexes);
        indexes = [];
    }

    for (let [key, value] of map) {
        console.log(`${key}:${value.join('/')}`);
    }
}

serialize(["abababa"])