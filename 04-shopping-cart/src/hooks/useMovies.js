import { useState, useEffect } from 'react'

export function useMovies () {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products')
        const response = await data.json()
        console.log(response)
        setProducts(response)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return { products, loading, error }
}
