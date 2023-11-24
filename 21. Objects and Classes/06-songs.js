function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    let numberOfSongs = arr.shift();
    let typeNeeded = arr.pop();

    let songs = [];
    for (let i = 0; i < arr.length; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);

        if (song.typeList === typeNeeded) {
            songs.push(song.name);
        }

        if (typeNeeded === "all") {
            songs.push(song.name)
        }
    }
    songs.forEach(songName => console.log(songName));
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);