import { createContext, useReducer } from 'react'
import { actionTypes, initialState, reducer } from '../reducers/cartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addProductsCart = (product) => {
    dispatch({ type: actionTypes.ADD, payload: product })
  }

  const removeItemInCart = product => {
    dispatch({ type: actionTypes.REMOVE, payload: product })
  }

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR })
  }

  return (
    <CartContext.Provider value={{ cart: state, addProductsCart, clearCart, removeItemInCart }}>
      {children}
    </CartContext.Provider>
  )
}
