
const baseUrl = "https://api.themoviedb.org/3/"
    const API_KEY = "a80e4a21332997c86c4d3026de392872";
const requests = {
    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&width_genres=99`
}
export  { requests,baseUrl };

// const LANG = "en-US";
// const REGION = "US";
// export const requests = {
//   fetchSearchQuery: `${baseUrl}/search/multi?api_key=${API_KEY}&language=${LANG}&query=`,
//   fetchTrending: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   /* Movies	*/
//   fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&region=${REGION}`,
//   fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=${LANG}`,
//   fetchAdventureMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=${LANG}`,
//   fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
//   fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=${LANG}`,
//   fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=${LANG}`,
//   fetchWarMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc&language=${LANG}`,
//   fetchAnimationMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
//   discoverMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
//   // Series
//   discoverSeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
//   fetchTrendingSeries: `${baseUrl}/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
//   fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=${LANG}`,
//   fetchActionAdventureSeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc&language=${LANG}`,
//   fetchAnimationSeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
//   fetchComedySeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
//   fetchCrimeSeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc&language=${LANG}`,
//   fetchDocumentarySeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=${LANG}`,
//   fetchFamilySeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=${LANG}`,
//   fetchKidsSeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc&language=${LANG}`,
//   fetchSciFiFantasySeries: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc&language=${LANG}`,
// };
// export const truncate = (str, n) => {
//   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
// };
// export default requests;
