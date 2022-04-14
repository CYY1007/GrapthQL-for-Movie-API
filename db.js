let movies = [
    {
        id:0,
        name:"Star Wars",
        score : 8,
        
    },
    {
        id:1,
        name:"Avengers",
        score : 7,
    },
    {
        id:2,
        name:"Star Wars",
        score : 7,
    },
    {
        id:3,
        name:"Good Will hunting",
        score : 8,
    },
    {
        id:4,
        name:"Harry Potter",
        score : 8,
    },
    {
        id:5,
        name:"The King's man",
        score : 8,
    },
]


export const getMovies = () => movies;

 export const getById = id => {
     const filteredMovie = movies.filter(movie => id === movie.id);
     return filteredPerson[0];
 }

 export const deleteMovie = (id) =>{
     const cleanedMovies = movies.filter(movie => movie.id !== id)
     if(movies > cleanedMovies){
        movies = cleanedMovies
        return true;
    }else
        false;
 }

 export const addMovie = (name, score) =>{
     const newMovie = {
        id:`${movies.length + 1}`, 
        name,
        score,
     }
     movies.push(newMovie);
     return newMovie;
 }