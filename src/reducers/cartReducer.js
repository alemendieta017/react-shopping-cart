export const initialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      )

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      } else {
        const newState = [...state, { ...actionPayload, quantity: 1 }]
        updateLocalStorage(newState)
        return newState
      }
    }
    case 'REMOVE_FROM_CART': {
      const newState = state.filter((item) => item.id !== actionPayload.id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
