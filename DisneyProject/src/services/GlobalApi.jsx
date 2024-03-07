import axios from  "axios";
const movieUrl ="https://api.themoviedb.org/3/"  
const apiKey ="d1afdce3b8e037f2fbfaf7f681aae5e9"
const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d1afdce3b8e037f2fbfaf7f681aae5e9';

const getTrendingVideos = axios.get(`${movieUrl}trending/all/day?api_key=${apiKey}`);
const getmovieByGenreId =(id)=> axios.get(`${movieByGenreBaseURL}&with_genres=`+id)


export default {getTrendingVideos, getmovieByGenreId}
