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
  
  fetchDiscovery : `/discover/tv?with_networks=4353&api_key=${API_KEY}&language=en-US`,
  fetchEros : `/discover/tv?with_networks=2716&api_key=${API_KEY}&language=en-US`,
  fetchHoichoi : `/discover/tv?with_networks=2139&api_key=${API_KEY}&language=en-US`,
  fetchLions : `/discover/tv?with_networks=16&api_key=${API_KEY}&language=en-US`,
  fetchManorama : `/discover/tv?with_networks=49&api_key=${API_KEY}&language=en-US`,
  fetchMubi : `/discover/tv?with_networks=5484&api_key=${API_KEY}&language=en-US`,
  fetchShortstv : `/discover/tv?with_networks=5511&api_key=${API_KEY}&language=en-US`,
}

export default requests