const tmdbKey = 'c6141042c6fcfbd399ce9a65c743920d';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');


const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  } catch (err) {
    console.log(err);
  }
};
const getMovies = async () => {
  const selectedGenre = getSelectedGenre(); 
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      console.log(movies);
      return movies;
    }
  } catch (error) {
    console.log(error.message);
  }
};

// 3. Get Movie Info
const getMovieInfo = async (movie) => {
  const movieId = movie.id; // ✅ Corrected variable name
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error.message);
  }
};

const showRandomMovie = async () => {
  const movieInfoContainer = document.getElementById('movieInfo');
  if (movieInfoContainer.childNodes.length > 0) {
    clearCurrentMovie(); 
  }

  const movies = await getMovies(); 
  const randomMovie = getRandomMovie(movies); 
  const info = await getMovieInfo(randomMovie); 
  displayMovie(info); 
};


getGenres().then(populateGenreDropdown); 
playBtn.onclick = showRandomMovie; 
