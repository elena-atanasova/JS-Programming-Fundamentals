function partyTime(arr) {

    let vipGuestsList = [];
    let regularGuestsList = [];

    let reservation = arr.shift();

    while (reservation !== 'PARTY') {
        if (/^\d+/.test(reservation)) {
            vipGuestsList.push(reservation);
        } else {
            regularGuestsList.push(reservation);
        }
        reservation = arr.shift();
    }

    for (let guest of arr) {
        if (vipGuestsList.indexOf(guest) >= 0) {
            vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
        }
        if (regularGuestsList.indexOf(guest) >= 0) {
            regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
        }
    }
    
    console.log(vipGuestsList.length + regularGuestsList.length);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE','SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);