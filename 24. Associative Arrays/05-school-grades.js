function schoolGrades(arr) {

    let map = new Map();
    for (const el of arr) {
        let [name, ...grades] = el.split(' ');
        grades = grades.map(Number);

        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades));
        }
    }

    let sorted = Array.from(map).sort(compareAverage);

    function compareAverage(a, b) {
        // Calculate first average
        let avgA = 0;
        a[1].forEach(x => avgA += x);
        avgA /= a[1].length;

        // Calculate second average
        let avgB = 0;
        b[1].forEach(x => avgB += x);
        avgB /= b[1].length;
        
        // Comparison
        return avgA - avgB;
    }

    for (const [key, value] of sorted) {
        console.log(`${key}: ${value.join(', ')}`);
    }
}

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);