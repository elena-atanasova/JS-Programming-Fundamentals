function replaceChar(str, char, result) {
    let newStr = str.replace("_", char);
    let output = newStr === result ? "Matched" : "Not Matched";

    console.log(output);
}

replaceChar('Str_ng', 'I', 'Strong');
replaceChar('Str_ng', 'i', 'String');