function addressBook(arr) {
    let addressBook = {}
    for (const el of arr) {
        let [name, address] = el.split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(['Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd']);