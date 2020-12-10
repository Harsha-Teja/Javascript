// 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

// vent listener for the punchline button. When clicked it should call a function called getPunchline
/* getPunchline function. This function : 
    punchline into the punchlineDiv
    class "bubble" to the punchlineDiv
    "hidden" class on both buttons.
*/
punchlineBtn.addEventListener('click', getPunchline);

// event listener for the new joke button. When clicked it should call the getJoke function 


function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

// async function called getJoke
// variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// variable called joke that consumes the json data

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    
    // setup from the joke and insert it into the setupDiv element
    setupDiv.innerHTML = joke[0].setup;
    
    // global variable called punchline which will store the current punchline and will be updated with each new joke
    // current jokes punchline to the punchline variable.
    punchline = joke[0].punchline;
    
    // punchline div and remove the "bubble" class from the punchline div
    
    
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

getJoke();