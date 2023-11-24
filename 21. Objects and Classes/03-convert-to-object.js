function convert(str) {
    let obj = JSON.parse(str);
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');