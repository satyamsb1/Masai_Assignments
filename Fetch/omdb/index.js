const apiKey = 'd314a06'; // Replace with your OMDB API key
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieDetails = document.getElementById('movieDetails');
const movieInfo = document.getElementById('movieInfo');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();

    if (query) {
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    movieInfo.innerHTML = `
                        <img src="${data.Poster}" alt="${data.Title} Poster">
                        <p><strong>Title:</strong> ${data.Title}</p>
                        <p><strong>Year:</strong> ${data.Year}</p>
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Plot:</strong> ${data.Plot}</p>
                    `;

                    movieDetails.classList.remove('hidden');
                } else {
                    movieInfo.innerHTML = '<p>Movie not found</p>';
                    movieDetails.classList.remove('hidden');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
