function roundNumber(num, precision) {
    if(precision > 15){
        precision = 15;
    }

    result = num.toFixed(precision);
    console.log(parseFloat(result));
}

roundNumber(3.1415926535897932384626433832795,2);
roundNumber(10.5, 3);