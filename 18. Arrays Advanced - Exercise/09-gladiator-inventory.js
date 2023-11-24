function printInventory(commands) {
    let inventory = commands.shift().split(' ');

    for (let el of commands) {
        let [command, equipment] = el.split(' ');

        switch (command) {
            case 'Buy':
                buy(equipment, inventory);
                break;
            case 'Trash':
                trash(equipment, inventory);
                break;
            case 'Repair':
                repair(equipment, inventory);
                break;
            case 'Upgrade':
                let [equip, upgrade] = equipment.split('-');
                makeUpgrade(equip, inventory, upgrade);
                break;

            default:
                break;
        }
    }
    return inventory.join(' ');
}

function buy(item, arr){
    if (!arr.includes(item)) {
        arr.push(item);
    }
}

function trash(item, arr) {
    if (arr.includes(item)) {
        arr.splice(arr.indexOf(item), 1);
    }
}

function repair(item, arr) {
    if (arr.includes(item)) {
        arr.splice(arr.indexOf(item), 1);
        arr.push(item);
    }
}

function makeUpgrade(item, arr, upgrade) {
    if (arr.includes(item)) {
        arr.splice(arr.indexOf(item) + 1, 0, `${item}:${upgrade}`);
    }
}

console.log(printInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']));
console.log(printInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']));