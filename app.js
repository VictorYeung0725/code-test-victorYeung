/*
Titles: https://omdbapi.com/?s=thor&page=2&apikey=604291d7
details: http://www.omdbapi.com/?i=tt3896198&apikey=604291d7
*/

// 2. XMLrequest fetch API async function load API data (s=${searchTerm})
// 3. re-render the html

const searchbox = document.getElementById('searchbox');
const searchList = document.getElementById('search-list');

// load movies from API
async function loadMovies(userInput) {
  const URL = `https://omdbapi.com/?s=${userInput}&page=2&apikey=bf9d768b`;
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
  if (userInput.length > 0) {
    searchList.classList.remove('hide-search-list');
    loadMovies(userInput);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

function displayMovieList(movies) {
  // For redenring title
  let title = document.createElement('h3');
  title.innerHTML = `
  <h3 class="text-xs text-gray-600 pl-2 py-1">Movies</h3>
  `;
  document.getElementById('title').insertAdjacentElement('afterbegin', title);

  //display the data to UI
  searchList.innerHTML = '';
  for (let i = 0; i <= 3; i++) {
    let movieListItem = document.createElement('li');
    movieListItem.innerHTML = `
    <li class="block hover:bg-gray-200 rounded px-2 py-1"><strong></strong>${movies[i].Title}</li>
    `;

    // movieListItem.insertAdjacentElement('afterend', );
    searchList.appendChild(movieListItem);
  }
}

searchbox.addEventListener('input', findMovies);
