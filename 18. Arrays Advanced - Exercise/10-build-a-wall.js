function buildWall(arr) {
    arr = arr.map(Number);
    let concrete = [];
    
    // days
    while (arr.length > 0) {
        let concretePerDay = 0;
        // crews
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i]++;
                concretePerDay += 195;
            }
        }
        arr = arr.filter(num => num !== 30);
        concrete.push(concretePerDay);
    }
    let pesos = concrete.reduce((prev, curr) => prev + curr) * 1900;
    
    console.log(concrete.join(', '));
    console.log(`${pesos} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17, 22, 17, 19, 17]);