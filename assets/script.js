

async function getMovie(title){
    const url = `https://imdb-api.com/en/API/SearchMovie/k_qfgt5lxg/${title}`;
    const res = await axios.get(url);
    const movie = res.data.results[0].id;
    console.log(movie);
    return movie;
    
};
// getMovie();

async function getCast(movie){
    const url = `https://imdb-api.com/en/API/FullCast/k_qfgt5lxg/${movie}`;
    const res = await axios.get(url);
    const cast = res.data;
    console.log(cast);
};
// getCast();