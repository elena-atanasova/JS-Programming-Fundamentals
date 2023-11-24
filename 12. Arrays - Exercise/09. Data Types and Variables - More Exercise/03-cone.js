function calculateCone(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

calculateCone(3, 5);
calculateCone(3.3, 7.8);