import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useMovies } from './hooks/useMovies'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

export function App () {
  const { loading, error } = useMovies()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <CartProvider>

      <Header />
      <Cart />
      <Products />
      <Footer />
    </CartProvider>
  )
}
