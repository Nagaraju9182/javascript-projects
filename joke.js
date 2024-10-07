
const jokeBtn = document.getElementById('jokeBtn');
const jokeText = document.getElementById('joke');


async function getJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  });
  const data = await response.json();
  return data.joke;
}


function tellJoke(joke) {
  const speech = new SpeechSynthesisUtterance(joke);
  speech.lang = 'en-US';
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}


jokeBtn.addEventListener('click', async () => {
  const joke = await getJoke();
  jokeText.textContent = joke;
  tellJoke(joke);
});
