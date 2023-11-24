function calculatePoints(arr) {
    arr = arr.map(Number);
    let [students, lectures, initialBonus, ...attendances] = arr;
    let maxBonusPoints = 0;
    let maxAttendance = 0;

    for (let i = 0; i < students; i++) {
        let totalBonus = attendances[i] / lectures * (5 + initialBonus);
        if (totalBonus > maxBonusPoints) {
            maxBonusPoints = totalBonus;
        }
        if (attendances[i] > maxAttendance) {
           maxAttendance = attendances[i];
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

calculatePoints(['5', '25', '30','12', '19', '24','16', '20']);