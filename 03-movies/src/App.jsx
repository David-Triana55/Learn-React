import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, error, setSearch } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovieByTitle, loading, failure, debouncedGetMovie } = useMovies({ search, sort })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return
    if (search.length < 3) return
    console.log(search)
    getMovieByTitle({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetMovie(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search} placeholder='Avengers, Star wars ....'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>
            buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} failure={failure} />}
        {failure ? <p style={{ color: 'red' }}>Hubo un error con el servicio, intente mas tarde</p> : null}
      </main>
    </div>
  )
}

export default App
