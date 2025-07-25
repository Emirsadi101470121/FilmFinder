
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

const API_KEY = 'https://www.omdbapi.com/?apikey=564727fa&s=';

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  resultsContainer.innerHTML = '';

  if (!query) return;

  try {
    resultsContainer.innerHTML = '<p>🔎 Searching...</p>';
    const response = await fetch(API_KEY + encodeURIComponent(query));
    const data = await response.json();

    resultsContainer.innerHTML = '';

    if (data.Response === 'True') {
      data.Search.forEach(movie => {
        const card = createMovieCard(movie);
        resultsContainer.appendChild(card);
      });
    } else {
      resultsContainer.innerHTML = '<p class="error">No results found. Please try another title.</p>';
    }
  } catch (err) {
    console.error(err);
    resultsContainer.innerHTML = '<p class="error">Something went wrong. Please try again later.</p>';
  }
});
