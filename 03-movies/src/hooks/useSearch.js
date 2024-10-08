import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('no se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('no se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('la busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, error, setSearch }
}
