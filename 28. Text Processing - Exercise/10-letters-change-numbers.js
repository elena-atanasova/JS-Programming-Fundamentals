function calculateSum(str) {
    let arr = str.split(' ');
    arr = arr.filter(str => str.length > 0);    // to remove just spaces

    let totalSum = 0;
    for (let el of arr) {
        totalSum += singleSum(el);
    }

    console.log(totalSum.toFixed(2));

    function singleSum(str) {
        str = str.split('');
        let firstLetter = str.shift();
        let lastLetter = str.pop();
        let num = Number(str.join(''));

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let sum = 0;
        if (checkLetter(firstLetter)) {
            sum += num / (alphabet.indexOf(firstLetter) + 1);
        } else {
            let upperC = firstLetter.toUpperCase();
            sum += num * (alphabet.indexOf(upperC) + 1);
        }

        if (checkLetter(lastLetter)) {
            sum = sum - (alphabet.indexOf(lastLetter) + 1);
        } else {
            let upperC = lastLetter.toUpperCase();
            sum = sum + (alphabet.indexOf(upperC) + 1);
        }

        return sum;
    }

    // if upper case, return true
    function checkLetter(char) {
        let bool = true;
        if (char.match(/(?=[A-Z])/)) {
            bool = true;
        } else {
            bool = false;
        }
        return bool;
    }
}

calculateSum('A12b s17G');
calculateSum('P34562Z q2576f   H456z');
calculateSum('a1A');