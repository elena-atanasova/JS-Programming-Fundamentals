function personInfo(fn, ln, a) {
    let person = {
        firstName: fn,
        lastName: ln,
        age: +a
    };
    
    return person;
}

console.log(personInfo('Peter', 'Pan', '20'));