function movies(arr) {
    let movies = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]. split(' ');
        let movie = {};

        if (command.includes('addMovie')) {
            command.shift();
            movie.name = command.join(' ');
            movies.push(movie);
        } else if (command.includes('directedBy')) {
            let index = command.indexOf('directedBy');
            let name = command.slice(0, index).join(' ');
            let director = command.slice(index + 1, command.length).join(' ');
  
            for (let movie of movies) {
                if (movie.name === name) {
                    movie.director = director;
                }
            }
        } else if (command.includes('onDate')) {
            let index = command.indexOf('onDate');
            let name = command.slice(0, index).join(' ');
            let date = command.slice(index + 1, command.length).join(' ');
  
            for (let movie of movies) {
                if (movie.name === name) {
                    movie.date = date;
                }
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            let str = JSON.stringify(movie);
            console.log(str);
        }
    }
}

movies(['addMovie Fast and Furious', 
    'addMovie Godfather', 
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);