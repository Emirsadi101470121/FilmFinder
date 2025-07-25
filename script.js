const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

const API_URL = 'https://www.omdbapi.com/?apikey=564727fa&s=';

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  resultsContainer.innerHTML = '';

  if (!query) return;

  try {
    resultsContainer.innerHTML = '<p>🍿 Searching...</p>';
    const response = await fetch(API_URL + encodeURIComponent(query));
    const data = await response.json();
    resultsContainer.innerHTML = '';

    if (data.Response === 'True') {
      data.Search.forEach(movie => {
        const card = createMovieCard(movie);
        resultsContainer.appendChild(card);
      });
    } else {
      resultsContainer.innerHTML = '<p class="error">😢 No results found. Try another title!</p>';
    }
  } catch (error) {
    console.error(error);
    resultsContainer.innerHTML = '<p class="error">🚨 Oops! Something went wrong.</p>';
  }
});
