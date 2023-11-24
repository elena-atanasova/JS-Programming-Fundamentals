function meetings(arr) {
    let appointments = {}

    for (const el of arr) {
        let [day, person] = el.split(' ')
        if (!appointments.hasOwnProperty(day)) {
            appointments[day] = person
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in appointments) {
        console.log(`${key} -> ${appointments[key]}`);
    }
}

meetings(['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']);