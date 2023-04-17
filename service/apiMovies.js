const { default: axios } = require("axios");


const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer ' + process.env.API_KEY_TMDB
  }
})

export default apiMovies