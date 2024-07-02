import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const cart = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('must be an error by component is not available in provider')
  }

  return cart
}
