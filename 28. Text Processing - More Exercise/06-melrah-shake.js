function melrahShake(arr) {
    let str = arr[0];
    let pattern = arr[1];

    let countOccurrences = str.split(pattern).length - 1;

    while (countOccurrences >= 2 && pattern.length > 0) {

        // remove the first occurrence
        let removeFirst = str.replace(pattern, '');

        // remove the last occurrence
        let removeLast = removeFirst.split('').reverse().join('');
        pattern = pattern.split('').reverse().join('');

        removeLast = removeLast.replace(pattern, '').split('').reverse().join('');
        pattern = pattern.split('').reverse().join('');

        console.log('Shaked it.');      // completes shake off

        // update pattern by removing an element
        let index = Math.floor(pattern.length / 2);
        pattern = pattern.split('');
        pattern.splice(index, 1);
        pattern = pattern.join('');

        // updates for the new loop
        str = removeLast;
        countOccurrences = str.split(pattern).length - 1;
    }

    if (countOccurrences < 2 || pattern.length <= 0) {
        console.log('No shake.');
    }
    console.log(str);
}

melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']);