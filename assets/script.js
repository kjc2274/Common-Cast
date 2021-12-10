async function getMovie(){
    const url = `https://imdb-api.com/en/API/SearchMovie/k_qfgt5lxg/leon the professional`;
    const res = await axios.get(url);
    const movie = res.data;
    console.log(movie);
};
getMovie();