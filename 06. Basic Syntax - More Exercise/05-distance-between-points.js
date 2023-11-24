function calculateDistance(x1, y1, x2, y2) {
    // Pythagorean theorem as d=√((x_2-x_1)²+(y_2-y_1)²)
    let distance = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));

    console.log(distance);
}

calculateDistance(2, 4, 5, 0);
calculateDistance(2.34, 15.66, -13.55, -2.9985);