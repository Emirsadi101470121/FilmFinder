const API_URL = "https://www.omdbapi.com/?apikey=564727fa&s=";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const container = document.getElementById("movie-container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  container.innerHTML = "<p>Searching...</p>";

  try {
    const res = await fetch(API_URL + encodeURIComponent(query));
    const data = await res.json();

    container.innerHTML = "";

    if (data.Response === "True") {
      data.Search.forEach((movie) => {
        const el = createMovieElement(movie);
        container.appendChild(el);
      });
    } else {
      container.innerHTML = `<p>No results found for "${query}".</p>`;
    }
  } catch (error) {
    container.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    console.error(error);
  }
});
