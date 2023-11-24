function sumator(arr) {
    let start = arr[0];
    let end = arr[1];
    let str = arr[2];

    let sum = 0;
    for (let char of str) {
        if (start < end) {
            if (char.charCodeAt(0) > start.charCodeAt(0) && char.charCodeAt(0) < end.charCodeAt(0)) {
                sum += char.charCodeAt(0);
            }
        } else {
            if (char.charCodeAt(0) < start.charCodeAt(0) && char.charCodeAt(0) > end.charCodeAt(0)) {
                sum += char.charCodeAt(0);
            }
        }
    }

    console.log(sum);
}

sumator(['.',
'@',
'dsg12gr5653feee5']);
sumator(['?',

'E',

'@ABCEF']);
sumator(['a',

'1',

'jfe392$#@j24ui9ne#@$']);