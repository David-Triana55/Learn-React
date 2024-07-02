import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
import debounce from 'just-debounce-it'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [failure, setFailure] = useState(null)
  const previousSearch = useRef(search)

  const getMovieByTitle = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      const newMovie = await searchMovies({ search })
      setMovies(newMovie)
    } catch (e) {
      setFailure(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedGetMovie = useCallback(
    debounce(search => {
      console.log(search)
      getMovieByTitle({ search })
    }, 500)
    , [getMovieByTitle]
  )

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovieByTitle, loading, failure, debouncedGetMovie }
}
