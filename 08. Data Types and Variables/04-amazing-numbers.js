function isAmazing(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let isAmazing = sum.toString().includes("9") ? "True" : "False";
    console.log(`${num} Amazing? ${isAmazing}`);
}

isAmazing(1233);
isAmazing(999);