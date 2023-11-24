function reverseString(str) {
    let arr = str.split("");
    let reversedArr = arr.reverse();
    let reversedStr = reversedArr.join("");

    console.log(reversedStr);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("12345");