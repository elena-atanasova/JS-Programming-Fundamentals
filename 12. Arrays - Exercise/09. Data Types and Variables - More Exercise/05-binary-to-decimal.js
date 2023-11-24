function convertBinaryToDecimal(num) {
    let str = num.toString();
    let decimal = parseInt(str, 2);
    console.log(decimal);
}

convertBinaryToDecimal(11110000);