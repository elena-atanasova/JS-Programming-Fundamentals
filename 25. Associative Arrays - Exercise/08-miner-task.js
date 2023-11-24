function minerTask(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i = i + 2) {
        let resourse = arr[i];
        let quantity = Number(arr[i + 1]);

        if (map.has(resourse)) {
            quantity = map.get(resourse) + quantity;
            map.set(resourse, quantity);
        } else {
            map.set(resourse, quantity);
        }
    }

    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Silver',
    '10',
    'Copper',
    '17']);