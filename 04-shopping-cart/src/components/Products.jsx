import { useFilters } from '../hooks/useFilters'
import { useMovies } from '../hooks/useMovies'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'
import { useCart } from '../hooks/useCart'

export function Products () {
  const { filterProducts } = useFilters()
  const { products } = useMovies()

  const filteredProducts = filterProducts(products)
  const { cart, addProductsCart, removeItemInCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {filteredProducts?.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (

            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={
                    isProductInCart
                      ? { backgroundColor: 'red' }
                      : { backgroundColor: '#09f' }
                  }
                  onClick={
                    () => isProductInCart
                      ? removeItemInCart(product)
                      : addProductsCart(product)
                  }
                >
                  {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                    }
                </button>
              </div>
            </li>
          )
        })}
      </ul>

    </main>
  )
}
