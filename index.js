const jokeEl = document.getElementById('joke');
const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', generateJoke);

generateJoke();
async function generateJoke(){
    const jokere = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            accept:'application/json'
        }
    });
    const joke= await jokere.json();
    jokeEl.innerHTML =joke.joke;
  }