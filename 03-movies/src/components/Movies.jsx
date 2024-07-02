export function ListOfMovies ({ movies }) {
  return (
    <ul className='container-movies'>
      {
      movies.map(movie => (
        <li className='card-movies' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))
    }
    </ul>
  )
}

function NoMoviesResults ({ failure }) {
  return (
    <>
      {!failure && <p>no se encontraron resultados</p>}
    </>
  )
}

export function Movies ({ movies, failure }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults failure={failure} />
  )
}
