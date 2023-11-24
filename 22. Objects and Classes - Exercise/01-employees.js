function printInfo(arr) {
    class Employee {
        constructor(name, nameLength) {
            this.name = name;
            this.personalNum = nameLength;
        }
    }

    for (let el of arr) {
        let employee = new Employee(el, el.length);
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

printInfo(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

// or

function employees(arr) {
    
    for (let singleName of arr) {
        let person = {
            name: singleName,
            personalNum: singleName.length
        };

        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }

}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);