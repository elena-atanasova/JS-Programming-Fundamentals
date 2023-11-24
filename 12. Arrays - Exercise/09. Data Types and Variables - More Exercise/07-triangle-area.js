function calculateTriangleArea(a, b, c) {
    // heron's formula: sqrt(s(s - a)(s - b)(s - c)), where s = (a + b + c) / 2

    // semi-perimeter
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}

calculateTriangleArea(2, 3.5, 4);