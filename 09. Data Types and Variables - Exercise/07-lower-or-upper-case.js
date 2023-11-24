function printCase(char) {
    let output = char >= String.fromCharCode(97) ? "lower-case" : "upper-case";
    console.log(output);
}

printCase('L');
printCase('f');