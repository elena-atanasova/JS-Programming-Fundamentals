function changeNums(arr) {
    let newArr = [];
    let sumOriginal = 0;
    let sumModified = 0;

    for (let i = 0; i < arr.length; i++) {

        let num = Number(arr[i]);
        sumOriginal += num;

        num % 2 === 0 ? num += i : num -= i;
        newArr.push(num);
        sumModified += num;
        
    }

    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumModified);
}

changeNums([5, 15, 23, 56, 35]);