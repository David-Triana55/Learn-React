const APIKEY = '1c7dca6d'

export async function searchMovies ({ search }) {
  if (search === '') return null

  try {
    const data = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`)
    const response = await data.json()

    const movies = response.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Could not search')
  }
}
