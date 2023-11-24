function findSpecialNums(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let numb = i.toString();
        
        for (let j = 0; j < numb.length; j++) {
            let arr = numb.split("");
            sum += Number(arr[j]);
        }

        let isSpecial = (sum == 5 || sum == 7 || sum == 11) ? "True" : "False";
        console.log(`${i} -> ${isSpecial}`);
    }
}

findSpecialNums(15);
findSpecialNums(20);


function solve(num) {
    
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let tempNum = i;

        while(tempNum > 0) {
            sum += tempNum % 10;
            tempNum = Math.floor(tempNum / 10);  
        }

        let result = (sum == 5 || sum == 7 || sum == 11) ? "True" : "False";
        console.log(`${i} -> ${result}`);
    }
}

solve(15);

