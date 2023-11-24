function phoneBook(arr) {
    let phonebook = {}
    for (let person of arr) {
        let [name, phoneNum] = person.split(' ');
        phonebook[name] = phoneNum;
    }

    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);