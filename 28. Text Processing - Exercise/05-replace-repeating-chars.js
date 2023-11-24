function replaceChars(str) {
    let output = [];
    let arr = str.split('');
    
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let next = arr[i + 1];

        if (curr !== next) {
            output.push(curr);
        }  
    }
    
    console.log(output.join(''));
}

replaceChars('aaaaabbbbbcdddeeeedssaa');