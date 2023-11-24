function substring(str, startIndex, count) {
    let lastIndex = startIndex + count;
    let substr = str.substring(startIndex, lastIndex);
    console.log(substr);
}

substring('ASentence', 1, 8);