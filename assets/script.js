

async function getMovie(){
    const url = `https://imdb-api.com/en/API/SearchMovie/k_qfgt5lxg/leon the professional`;
    const res = await axios.get(url);
    const movie = res.data.results[0].id;
    console.log(movie);
    return movie;
    
};
// getMovie();

async function getCast(){
    const url = `https://imdb-api.com/en/API/FullCast/k_qfgt5lxg/tt0110413`;
    const res = await axios.get(url);
    const cast = res.data;
    console.log(cast);
};
// getCast();