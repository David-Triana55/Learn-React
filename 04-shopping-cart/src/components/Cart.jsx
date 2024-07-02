import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

export function CartItem ({ id, image, title, price, quantity, addProductsCart }) {
  return (
    <li key={id}>
      <img
        src={image}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addProductsCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addProductsCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              {...product}
              key={product.id}
              addProductsCart={() => addProductsCart(product)}
            />

          ))}
        </ul>
        <button className='buton' onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
