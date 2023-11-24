function inventory(arr) {
    let heroes = [];

    for (let per of arr) {
        let [name, level, items] = per.split(' / ');
        level = Number(level);

        // sort the items
        let newItems = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        let person = {
            name: name,
            level: level,
            items: newItems
        }
        heroes.push(person);
    }

    heroes.sort((a, b) => (a.level > b.level) ? 1 : -1)
    heroes.forEach(per => {
        if (per.name) {
            console.log(`Hero: ${per.name}`);
        }
        if (per.level) {
            console.log(`level => ${per.level}`);
        }
        if (per.items) {
            console.log(`items => ${per.items}`);
        }
    });
}

// Another Solution
function solve(arr) {
    let heros = []

    arr.map(x => x.split(' / '))
        .map(x => heros.push({
            name: x[0],
            level: +x[1],
            items: x[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        }))

    heros.sort((a, b) => a.level - b.level)
        .map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))

}


solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);