const search1 = document.querySelector("#input1");
const search2 = document.querySelector("#input2");
const searchInput1 = document.querySelector("#search1");
const searchInput2 = document.querySelector("#search2");
const button = document.querySelector("#button1");
const movieDisplay1 = document.querySelector("#display1");
const movieDisplay2 = document.querySelector("#display2");

async function getMovie1(event){
    event.preventDefault();
    const title = searchInput1.value;
    const url = `http://www.omdbapi.com/?apikey=390956fa&s=${title}`;
    const res = await axios.get(url);
    const movie = res.data.Search[0];
    displayMovie1(movie);
    const id = res.data.Search[0].imdbID;
    console.log(id);
    // return movie;    
};

async function getMovie2(event){
    event.preventDefault();
    const title = searchInput2.value;
    const url = `http://www.omdbapi.com/?apikey=390956fa&s=${title}`;
    const res = await axios.get(url);
    const movie = res.data.Search[0];
    displayMovie2(movie);
    const id = res.data.Search[0].imdbID;
    console.log(id);
    // return movie;    
};

function displayMovie1(movie){
    movieDisplay1.innerHTML = "";
    document.getElementById("display1").style.padding = "0";

    const title = document.createElement("h3");
    title.innerText = movie.Title;
    movieDisplay1.appendChild(title);

    const poster = document.createElement("img");
    poster.src = movie.Poster;
    poster.alt = `${movie.Title} poster`;
    movieDisplay1.appendChild(poster);
};

function displayMovie2(movie){
    movieDisplay2.innerHTML = "";
    document.getElementById("display2").style.padding = "0";

    const title = document.createElement("h3");
    title.innerText = movie.Title;
    movieDisplay2.appendChild(title);

    const poster = document.createElement("img");
    poster.src = movie.Poster;
    poster.alt = `${movie.Title} poster`;
    movieDisplay2.appendChild(poster);
};

async function getCast(movie){
    const url = `https://imdb-api.com/en/API/FullCast/k_qfgt5lxg/${movie}`;
    const res = await axios.get(url);
    const cast = res.data;
    console.log(cast);
};

async function getCast(movie){
    const url = `https://imdb-api.com/en/API/FullCast/k_qfgt5lxg/${movie}`;
    const res = await axios.get(url);
    const cast = res.data;
    console.log(cast);
};



search1.addEventListener("submit", getMovie1);
search2.addEventListener("submit", getMovie2);