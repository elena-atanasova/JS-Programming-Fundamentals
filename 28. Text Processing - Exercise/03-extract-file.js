function extractFile(str) {
    let arr = str.split('\\');
    let file = arr.pop();

    let fileArr = file.split('.');
    let extension = fileArr.pop();
    let fileName = fileArr.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bg.pptx');