const library = [
    {
        title: "Il Signore degli Anelli: La Compagnia dell'Anello",
        year: 2001,
        genre: "Fantasy",
        rating: 8.8,
        type: "movie"
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "tvSeries",
        seasons: 5
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        type: "movie"
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.3,
        type: "tvSeries",
        seasons: 8
    },
]

class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }
    toString() {
        if (this.type = "film") {
            return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`
        }
    }
}

class TvSeries extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type)
        this.seasons = seasons;
    }
    toString() {
        if (this.type = "serie tv") {
            return `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciata nel ${year} ed in totale sono state prodotte ${this.seasons}. Ha un voto di ${this.rating}.`
        }
    }
}

const filteredArray = library.map(function(e) {
    if (e.type == "movie") {
        return new Movie(e.title, e.year, e.genre, e.rating, e.type);
    } else {
        return new TvSeries(e.title, e.year, e.genre, e.rating, e.type, e.seasons)
    }
})

// MEDIA VOTI
function averageVote(genre) {
    let totalRating = 0;
    let count = 0;
    filteredArray.forEach(e => {
        if (e.genre === genre) {
            totalRating += e.rating;
            count++;
        }
    });
    return totalRating / count;
}
console.log(averageVote("Fantasy"));


// LISTA GENERI NON RIPETUTA
function genreList() {
    const genres = [];
    filteredArray.forEach(e => {
        if (!genres.includes(e.genre)) {
            genres.push(e.genre);
        }
    });
    return console.log(genres);
}

genreList();


/*
    Creiamo una funzione che filtri i film in base ad un genere passato come
    argomento e ne ritorni un array con all’interno il risultato della 
    funzione toString() di ogni film.
*/

function genreFilter(genre) {
    const videoDescription = [];
    filteredArray.forEach(e => {
        if (e.genre === genre) {
            videoDescription.push(e.toString());
        }
    })
    return console.log(videoDescription);
}

genreFilter("Action");
