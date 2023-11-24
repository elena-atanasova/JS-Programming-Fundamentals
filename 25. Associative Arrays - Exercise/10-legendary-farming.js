function legendaryFarming(str) {
    let arr = str.split(' ');

    let map = new Map();
    for (let i = 0; i < arr.length; i = i + 2) {
        let quantity = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();

        if (!map.has(material)) {
            map.set(material, quantity);
        } else {
            let newQuantity = map.get(material) + quantity;
            map.set(material, newQuantity);
        }

        if (map.get('shards') >= 250) {
            console.log(`Shadowmourne obtained!`);
            let left = map.get('shards') - 250;
            map.set('shards', left);
            break;
        } else if (map.get('fragments') >= 250) {
            console.log(`Valanyr obtained!`);
            let left = map.get('fragments') - 250;
            map.set('fragments', left);
            break;
        } else if (map.get('motes') >= 250) {
            console.log(`Dragonwrath obtained!`);
            let left = map.get('motes') - 250;
            map.set('motes', left);
            break;
        }
    }

    let special = new Map();
    special.set('shards', map.get('shards'));
    special.set('motes', map.get('motes'));
    special.set('fragments', map.get('fragments'));

    for (let [key, value] of special) {
        if (value === undefined) {
            special.set(key, 0);
        }
    }

    map.delete('shards');
    map.delete('motes');
    map.delete('fragments');

    let sortedSpecial = Array.from(special).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedMap = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sortedSpecial) {
        console.log(`${el[0]}: ${el[1]}`);
    }

    for (let el of sortedMap) {
        console.log(`${el[0]}: ${el[1]}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');