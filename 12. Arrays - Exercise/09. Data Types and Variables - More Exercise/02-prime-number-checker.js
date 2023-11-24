function isPrime(num) {
    let isPrime = true;

    for (let i = 2; i <= num - 1; i++) {
        isPrime = num % i == 0 ? false : true;
        
        if(isPrime === false) {
            break;
        }   
    }

    let output = isPrime === false ? "false" : "true";
    console.log(output);
}

isPrime(7);
isPrime(8);
isPrime(81);