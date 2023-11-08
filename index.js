const library = [
    {
        title: "Il Signore degli Anelli: La Compagnia dell'Anello",
        year: 2001,
        genre: "Fantasy",
        rating: 8.8,
        type: "film"
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "serie tv",
        seasons: 5
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        type: "film"
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.3,
        type: "serie tv",
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
        return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`
    }
}

class TvSeries extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type)
        this.seasons = seasons;
    }
    toString() {
        return `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciata nel ${year} ed in totale sono state prodotte ${this.seasons}. Ha un voto di ${this.rating}.`
    }
}

// const filteredArray = library.map(title: String, year: Number, genre: String, rating: Number, type: String)

// const filteredArray = library.map(function(e) {
    
// }
