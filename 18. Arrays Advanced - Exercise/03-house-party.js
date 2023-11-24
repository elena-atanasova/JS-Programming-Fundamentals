function trackGuests(commands) {
    let guests = [];

    for (let i = 0; i < commands.length; i++) {
        let curr = commands[i].split(' ');
        let [name] = commands[i].split(' ');
        if (curr.includes('not')) {
            if (guests.includes(name)) {
                guests = guests.filter(x => x !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else if (!curr.includes('not')){
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        }
    }
    
    console.log(guests.join('\n'));
}

trackGuests(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
trackGuests(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);