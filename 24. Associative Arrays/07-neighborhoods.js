function neighborhoods(arr) {
    let neighborhoods = arr.shift().split(', ');
    let map = new Map();

    for (let nh of neighborhoods) {
        map.set(nh, []);
    }

    for (let el of arr) {
        let [nh, name] = el.split(' - ');
        if (map.has(nh)) {
            map.get(nh).push(name);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length)

    for (let [key, value] of sorted) {
        console.log(`${key}: ${value.length}`);
        value.forEach(x => console.log(`--${x}`))
    }
}


neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Herald Street - Keity',
    'Abbey Street - Liam',
    'Bright Mews - Mark',
    'Abbey Street - John']);