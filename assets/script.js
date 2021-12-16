const search1 = document.querySelector("#input1");
const search2 = document.querySelector("#input2");
const info = document.querySelector('#info');
const info2 = document.querySelector('#info2');
const searchInput1 = document.querySelector("#search1");
const searchInput2 = document.querySelector("#search2");
const button = document.querySelector("#find");
const movieDisplay1 = document.querySelector("#display1");
const movieDisplay2 = document.querySelector("#display2");
const actorDisplay = document.querySelector("#actor-display");
let castArray1 = [];
let castArray2 = [];
let actorImages = [];

async function getMovie1(event){
    event.preventDefault();
    const title = searchInput1.value;
    const url = `https://www.omdbapi.com/?apikey=390956fa&type=movie&s=${title}`;
    const res = await axios.get(url);
    const movie = res.data.Search[0];
    displayMovie1(movie);
    const id = res.data.Search[0].imdbID;
    getCast1(id);
};

async function getMovie2(event){
    event.preventDefault();
    const title = searchInput2.value;
    const url = `https://www.omdbapi.com/?apikey=390956fa&type=movie&s=${title}`;
    const res = await axios.get(url);
    const movie = res.data.Search[0];
    displayMovie2(movie);
    const id = res.data.Search[0].imdbID;
    getCast2(id);
};

function displayMovie1(movie){
    movieDisplay1.innerHTML = "";
    document.getElementById("display1").style.padding = "0";
    document.getElementById("display1").style.visibility = "visible";

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
    document.getElementById("display2").style.visibility = "visible";

    const title = document.createElement("h3");
    title.innerText = movie.Title;
    movieDisplay2.appendChild(title);

    const poster = document.createElement("img");
    poster.src = movie.Poster;
    poster.alt = `${movie.Title} poster`;
    movieDisplay2.appendChild(poster);
};

async function getCast1(movie){
    const url = `https://imdb-api.com/en/API/FullCast/k_qfgt5lxg/${movie}`;
    const res = await axios.get(url);
    const cast = res.data.actors;
    castArray1 = [];
    for (let i = 0; i < cast.length; i++){
    castArray1.push(cast[i].name);
    }
  };

async function getCast2(movie){
    const url = `https://imdb-api.com/en/API/FullCast/k_qfgt5lxg/${movie}`;
    const res = await axios.get(url);
    const cast = res.data.actors;
    castArray2 = [];
    actorImages = [];
    for (let i = 0; i < cast.length; i++){
    castArray2.push(cast[i].name);
    actorImages.push(cast[i].image)
    }
};

function findActors(event){
    event.preventDefault();
    actorDisplay.innerText = "";
    document.getElementById("actor-display").style.padding = "0 0 100px 0";
    let newArray = castArray1.concat(castArray2);

    
    //next 7 lines taken from: https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
    const count = names =>
  names.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
  }), {}) 
    const duplicates = dict =>
    Object.keys(dict).filter((a) => dict[a] > 1)
    let actors = duplicates(count(newArray));
    
    
    
    if(actors.length == 0){
        let h3 = document.createElement('h3');
        h3.innerText = "Sorry, it looks like we don't have anyone who was in both films you selected.";
        actorDisplay.appendChild(h3);
    }else{
  for(let i = 0; i < actors.length; i++) {
    let actorName = document.createElement('h4');
    actorName.innerText = `${actors[i]}`;
    actorDisplay.appendChild(actorName);

    let actorIndex = castArray2.indexOf(actors[i]);
    let actorImage = document.createElement('img');
    actorImage.src = actorImages[actorIndex];
    actorImage.alt = `Image of ${actors[i]}`;
    actorName.appendChild(actorImage);
  };
}
};

function displayDescription(){
  document.querySelector(".description").classList.toggle("visible");
}
function displayDescriptionAlt(){
  document.querySelector(".descriptionAlt").classList.toggle("visible");
}


search1.addEventListener("submit", getMovie1);
search2.addEventListener("submit", getMovie2);
button.addEventListener("click", findActors);
info.addEventListener("click", displayDescription);
info2.addEventListener("click", displayDescriptionAlt);