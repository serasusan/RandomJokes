const jokesContainer = document.getElementById('jokes-container');
const joke = document.getElementById("fetch-joke-button");
joke.addEventListener('click',fetchJoke);
function fetchJoke(){
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const jokes = data.jokes;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    jokesContainer.innerHTML = '';

      const jokeElement = document.createElement('p');
      jokeElement.textContent = `${randomJoke}`;
      jokesContainer.appendChild(jokeElement);
    
  })
  .catch(error => {
    console.error('Error fetching jokes:', error);
  });
}

