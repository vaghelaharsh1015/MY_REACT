/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'

export const UserContext = createContext({
  user: null,
  login: () => {},
})

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: 'Harsh' })
  }

  const value = useMemo(
    () => ({ user, login }),
    [user],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
