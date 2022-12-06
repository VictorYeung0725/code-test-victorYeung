/*
Titles: https://omdbapi.com/?type=movie&s=spider&page=2&apikey=604291d7
details: http://www.omdbapi.com/?i=tt3896198&apikey=604291d7
*/

const searchbox = document.getElementById('searchbox');
const searchList = document.getElementById('search-list');
const movieTitle = document.getElementById('title');

// load movies from API
async function loadMovies(userInput, movie) {
  const URL =
    `https://omdbapi.com/?s=${userInput}&page=2&apikey=604291d7` + movie;
  // console.log(URL);
  const res = await fetch(`${URL}`);
  const data = await res.json();
  console.log(data.Search);
  if (data.Response == 'True') {
    displayMovieList(data.Search);
  }
}

function findMovies() {
  // store user input + add eventlistner
  let userInput = searchbox.value.trim();
  console.log(userInput);

  const movie = `&type=movie&`;
  const tv = '&type=series&';

  if (userInput.length > 0) {
    searchList.classList.remove('hide-search-list');
    loadMovies(userInput, movie);
    loadMovies(userInput, tv);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

function displayMovieList(movies) {
  searchList.innerHTML = '';
  // targetElement.insertAdjacentElement(position, elementToBeInserted);
  let movieType = document.createElement('ul');
  for (let i = 0; i < 3; i++) {
    movieType.innerHTML += `<li class="block hover:bg-gray-200 rounded px-2 py-1"><strong></strong>${movies[i].Title}</li>`;
    movieType.classList.add('search-list-item');
    searchList.appendChild(movieType);
  }
}

searchbox.addEventListener('input', findMovies);
