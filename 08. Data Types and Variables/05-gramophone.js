function countRotations(band, album, song) {
    let duration = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(duration / 2.5); // each rotation is 2.5 secs

    console.log(`The plate was rotated ${rotations} times.`);
}

countRotations('Black Sabbath', 'Paranoid', 'War Pigs');
countRotations('Rammstein', 'Sehnsucht', 'Engel');