function race(input) {
    let names = input.shift();
    
    let i = 0;
    let command = input[i];
    let obj = {};

    while (command !== 'end of race') {

        let name = [];
        let distance = 0;

        for (let letter of command) {
            if (letter.match(/[A-Za-z]/g)) {
                name.push(letter);
            } else if(letter.match(/[0-9]/g)){
                distance += Number(letter);
            }
        }

        name = name.join('');

        if (Object.keys(obj).includes(name) && names.includes(name)) {
            obj[name] += distance;
        } else if (!Object.keys(obj).includes(name) && names.includes(name)){
            obj[name] = distance;
        }

        i++;
        command = input[i];
    }

    let sorted = Array.from(Object.entries(obj)).sort((a,b) => b[1] - a[1]);

    for (let i = 0; i < 3; i++) {
        let key = sorted[i][0];
        if (i === 0) {
            console.log(`1st place: ${key}`);
        } else if (i === 1) {
            console.log(`2nd place: ${key}`);
        } else {
            console.log(`3rd place: ${key}`);
        }
        
    }
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);