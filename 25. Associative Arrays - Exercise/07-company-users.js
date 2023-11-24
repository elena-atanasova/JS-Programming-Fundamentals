function companyUsers(arr) {
    let map = new Map();

    for (const comp of arr) {
        let [company, employeeNo] = comp.split(' -> ');

        if (!map.has(company)) {
            let array = [];
            map.set(company, array);
            
            array.push(employeeNo);
            map.set(company, array);
        } else {
            let array = map.get(company).concat(employeeNo);
            if (!map.get(company).includes(employeeNo)) { 
                map.set(company, array);
            }
        }
    }

    let sorted = Array.from(map).sort();

    for (const [key, value] of sorted) {
        console.log(`${key}`);
        value.forEach(v => console.log(`-- ${v}`));
    } 
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'SoftUni -> AA12345',
    'Microsoft -> CC12345', 
    'HP -> BB12345' ]);