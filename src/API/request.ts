const API_KEY = "4e44d9029b1270a757cddc766a1bcb63"

const requests = {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchAction : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchRomance : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchComedy : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchPopular : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchHorror : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentary : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchFamily : `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchSF : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchDrama : `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchAnimation : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default requests