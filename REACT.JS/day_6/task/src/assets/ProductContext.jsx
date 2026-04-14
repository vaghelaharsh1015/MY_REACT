/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'

export const ProductContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalPrice: () => {},
})

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 50000, emoji: '💻' },
  { id: 2, name: 'Phone', price: 30000, emoji: '📱' },
  { id: 3, name: 'Headphones', price: 5000, emoji: '🎧' },
  { id: 4, name: 'Watch', price: 15000, emoji: '⌚' },
  { id: 5, name: 'Camera', price: 40000, emoji: '📷' },
]

export function ProductProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === productId)
      if (item && item.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
      }
      return prevCart.filter((item) => item.id !== productId)
    })
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const value = useMemo(
    () => ({
      products: PRODUCTS,
      cart,
      addToCart,
      removeFromCart,
      getTotalPrice: () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    [cart],
  )

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
