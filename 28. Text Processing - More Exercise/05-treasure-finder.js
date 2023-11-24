function treasureFinder(arr) {
    let keys = arr.shift().split(' ').map(Number);
    let result = [];

    let i = 0;
    let line = arr[i];
    while (line !== 'find') {
        for (let j = 0; j < line.length; j++) {
            let charCode = line.charCodeAt(j);

            let indexKeys = j;
            if(indexKeys >= keys.length) {
                while(indexKeys >= keys.length) {
                    indexKeys -= keys.length;
                }
            }
            let finalCode = charCode - keys[indexKeys];
            let ch = String.fromCharCode(finalCode)
            result.push(ch)
        }
        i++;
        line = arr[i];

        let treasure = result.join('').split('&')[1];
        let coordinates = result.join('').split('<').pop();
        coordinates = coordinates.split('').slice(0, coordinates.length - 1).join('');
        console.log(`Found ${treasure} at ${coordinates}`);

        result = [];
    }
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);