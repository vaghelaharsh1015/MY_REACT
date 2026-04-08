/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 1,
      name: 'Harsh Patel',
      email: 'harsh@example.com',
      image: '',
    })
  }

  const logout = () => {
    setUser(null)
  }

  const isAuthenticated = user !== null

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated }),
    [user, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
