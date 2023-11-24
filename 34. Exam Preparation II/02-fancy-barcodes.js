function fancyBarcodes(input) {
    let n = input.shift();

    let pattern = /(@[#]+)[A-Z]([A-Za-z0-9]{4,})[A-Z](@[#]+)/g;
    let digitReg = /\d/g;

    for (let barcode of input) {
        if (!barcode.match(pattern)) {
            console.log('Invalid barcode');
        } else {
            if(barcode.match(digitReg)) {
                let group = barcode.match(digitReg).join('');
                console.log(`Product group: ${group}`);
            } else {
                console.log('Product group: 00');
            }
        }
    }

}

fancyBarcodes((["6",

"@###Val1d1teM@###",

"@#ValidIteM@#",

"##InvaliDiteM##",

"@InvalidIteM@",

"@#Invalid_IteM@#",

"@#ValiditeM@#"]));