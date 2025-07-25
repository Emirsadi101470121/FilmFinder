const createMovieCard = (movie) => {
  const card = document.createElement('div');
  card.className = 'movie-card';

  const poster = document.createElement('img');
  poster.src = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/80x120?text=No+Poster';
  poster.alt = `${movie.Title} Poster`;

  const info = document.createElement('div');
  info.className = 'info';
  info.innerHTML = `
    <h3>${movie.Title}</h3>
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Type:</strong> ${movie.Type}</p>
  `;

  card.appendChild(poster);
  card.appendChild(info);
  return card;
};
