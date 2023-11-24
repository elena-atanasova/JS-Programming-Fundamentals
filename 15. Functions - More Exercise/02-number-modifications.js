function modifyNum(num) {
    let arrOfNum = num.toString().split('');
    let sum = arrOfNum.reduce((prev, curr) => Number(prev) + Number(curr));
    let length = arrOfNum.length;
    let average = sum / length;

    for (let i = 0; i < arrOfNum.length; i++) {
        if (average < 5) {
            arrOfNum.push('9');
            sum = arrOfNum.reduce((prev, curr) => Number(prev) + Number(curr));
            length = arrOfNum.length;
            average = sum / length;
        } else {
            break;
        }
    }
    
    console.log(arrOfNum.join(""));
}

modifyNum(5835);
modifyNum(101);