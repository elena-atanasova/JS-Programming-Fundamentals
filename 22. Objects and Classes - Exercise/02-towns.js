function towns(arr) {
    for (let el of arr) {
        let [name, latitude, longitude] = el.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let town = {
            town: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);