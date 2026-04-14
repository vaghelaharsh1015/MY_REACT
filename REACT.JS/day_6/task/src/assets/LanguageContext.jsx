/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'

export const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  t: () => {},
})

const translations = {
  en: {
    hello: 'Hello',
  },
  gu: {
    hello: 'Kem cho',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'gu' : 'en'))
  }

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: (key) => translations[language]?.[key] || key,
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
