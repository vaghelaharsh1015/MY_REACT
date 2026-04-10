/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'

export const CartContext = createContext({
  cartCount: 0,
  addToCart: () => {},
})

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount((count) => count + 1)
  }

  const value = useMemo(
    () => ({ cartCount, addToCart }),
    [cartCount],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}