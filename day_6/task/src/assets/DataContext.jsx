/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'

export const DataContext = createContext({
  message: '',
  updateMessage: () => {},
})

export function DataProvider({ children }) {
  const [message, setMessage] = useState('Hello from Context!')

  const updateMessage = (newMessage) => {
    setMessage(newMessage)
  }

  const value = useMemo(
    () => ({ message, updateMessage }),
    [message],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}