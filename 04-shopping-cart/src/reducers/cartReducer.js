/* eslint-disable no-case-declarations */
export const actionTypes = {
  ADD: 'ADD_TO_CART',
  REMOVE: 'REMOVE_TO_CART',
  CLEAR: 'CLEAR_CART'
}

export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:

      const productInCartIndex = state.findIndex(item => item.id === action.payload.id)

      if (productInCartIndex !== -1) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }

      const newState = [...state, { ...action.payload, quantity: 1 }]
      updateLocalStorage(newState)
      return newState

    case actionTypes.REMOVE:
      const itemDelete = state.filter(item => item.id !== state.payload.id)
      updateLocalStorage(itemDelete)
      return itemDelete

    case actionTypes.CLEAR:
      updateLocalStorage([])
      return initialState
  }
}
