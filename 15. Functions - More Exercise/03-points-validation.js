function validateDistance(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    // booleans
    let point1ToStart = isValid(x1, y1, 0, 0);
    let point2ToStart = isValid(x2, y2, 0, 0);
    let pointsDist = isValid(x1, y1, x2, y2);

    let result1 = point1ToStart ? `{${x1}, ${y1}} to {${0}, ${0}} is valid` : `{${x1}, ${y1}} to {${0}, ${0}} is invalid`;
    let result2 = point2ToStart ? `{${x2}, ${y2}} to {${0}, ${0}} is valid` : `{${x2}, ${y2}} to {${0}, ${0}} is invalid`;
    let result3 = pointsDist ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;

    console.log(result1);
    console.log(result2);
    console.log(result3);
}

validateDistance([3, 0, 0, 4]);
validateDistance([2, 1, 1, 1]);

function isValid(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return Number.isInteger(distance);
}
