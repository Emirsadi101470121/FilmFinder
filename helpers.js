const createMovieElement = (movie) => {
  const movieEl = document.createElement("div");
  movieEl.className = "movie";

  const poster = document.createElement("img");
  poster.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/80x120";
  poster.alt = `${movie.Title} poster`;

  const info = document.createElement("div");
  info.className = "movie-info";
  info.innerHTML = `
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
  `;

  movieEl.appendChild(poster);
  movieEl.appendChild(info);
  return movieEl;
};
