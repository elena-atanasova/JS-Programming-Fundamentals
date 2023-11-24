function manipulateArr(nums, commands) {
    
    for (let el of commands) {
        let [command, num1, ...rest] = el.split(' ');
        num1 = Number(num1);
        rest = rest.map(Number);
        
        switch (command) {
            case 'add':
                nums.splice(num1, 0, rest[0]);
                break;
            case 'addMany':
                nums.splice(num1, 0, ...rest);
                break;
            case 'contains':
                console.log(nums.indexOf(num1));
                break;
            case 'remove':
                nums.splice(num1, 1);
                break;
            case 'shift':
                shift(num1);
                break;
            case 'sumPairs':
                let newArr = [];
                nums = sumPairs(nums, newArr);
                break;
            case 'print':
                console.log(`[ ${nums.join(', ')} ]`);
                break;
            default:
                break;
        }
    }

    function shift(shiftAmount) {
        for (let i = 0; i < shiftAmount; i++) {
            let temp = nums.shift();
            nums.push(temp);
        }
    }
    
    function sumPairs(arr, newArr) {
        for (let i = 0; i < arr.length - 1; i = i + 2) {
            let currEl = arr[i];
            let nextEl = arr[i + 1];
            let sum = currEl + nextEl;
            newArr.push(sum);
        }
    
        if (arr.length % 2 !== 0) {
            newArr.push(arr[arr.length - 1]);
        }
        return newArr;
    }
}

manipulateArr([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
manipulateArr([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
manipulateArr([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);


function shift(shiftAmount) {
    for (let i = 0; i < shiftAmount; i++) {
        let temp = nums.shift();
        nums.push(temp);
    }
}

function sumPairs(arr, newArr) {
    for (let i = 0; i < arr.length - 1; i = i + 2) {
        let currEl = arr[i];
        let nextEl = arr[i + 1];
        let sum = currEl + nextEl;
        newArr.push(sum);
    }

    if (arr.length % 2 !== 0) {
        newArr.push(arr[arr.length - 1]);
    }
    
    return newArr;
}