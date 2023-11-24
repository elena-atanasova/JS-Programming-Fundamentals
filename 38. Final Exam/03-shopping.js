function shopping(input) {
    let list = {};
    let products = [];
    let importantItem = '';
    for (let command of input) {
        if (command === 'Go Shopping') { break; }

        let [action, ...rest] = command.split('->');
        if (action === 'Add') {
            let store = rest[0];
            let items = rest[1].split(',');

            let temp = [];
            for (let el of items) {
                if (products.indexOf(el) == -1) {
                    products.push(el);
                    temp.push(el);
                }
            }

            items = temp;

            if (!list.hasOwnProperty(store)) {
                list[store] = {};
                list[store].products = [];
                for (let el of items) {
                    list[store].products.push(el);
                }
            } else {
                for (let pr of items) {
                    list[store].products.push(pr);
                }
            }
        } else if (action === 'Important') {
            let store = rest[0];
            let item = rest[1];
            importantItem = item;

            if (products.indexOf(item) == -1) {
                products.push(item);
            } else {
                item = ' ';
            }

            if (!list.hasOwnProperty(store)) {
                list[store] = {};
                list[store].products = [];
                if (item != ' ') {
                    list[store].products.unshift(item);
                }
            } else {
                if (item != ' ') {
                    list[store].products.unshift(item);
                }
            }
        } else if (action === 'Remove') {
            let [store] = rest;
            if (list.hasOwnProperty(store)) {
                if ((list[store].products).indexOf(importantItem) == -1) {
                    delete list[store];
                }
            }
        }
    }

    for (let [key, value] of Object.entries(list)) {
        console.log(`${key}:`);
        value.products.forEach(element => {
            console.log(` - ${element}`);
        });
    }
}

shopping(["Add->Peak->Batteries,Umbrella",
    "Add->Groceries->Water,Juice,Food",
    "Add->Peak->Tent",
    "Important->Groceries->Batteries",
    "Remove->Store",
    "Go Shopping"]);