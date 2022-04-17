const API_URL = `https://yts.mx/api/v2/list_movies.json?`;
const API_URL2 = `https://yts.mx/api/v2/movie_details.json?`;
import fetch from"node-fetch";

export const getMovies = (limit, rating) =>{
    let REQUEST_URL = API_URL;
    if(limit >0)
        REQUEST_URL += `limit=${limit}`;
    if(rating > 0)
        REQUEST_URL +=`&minimum_rating=${rating}`;
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}

export const getMovieDetail = async (id) => {
	const url = `https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${id}`;
	const fetchDetail = await fetch(url);
	const detailData = await fetchDetail.json();
	return detailData.data.movie;
};