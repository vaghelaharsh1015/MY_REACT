import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './assets/ThemeContext.jsx'
import { UserProvider } from './assets/UserContext.jsx'
import { CartProvider } from './assets/CartContext.jsx'
import { DataProvider } from './assets/DataContext.jsx'
import { LanguageProvider } from './assets/LanguageContext.jsx'
import { AuthProvider } from './assets/AuthContext.jsx'
import { ProductProvider } from './assets/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <DataProvider>
            <LanguageProvider>
              <AuthProvider>
                <ProductProvider>
                  <App />
                </ProductProvider>
              </AuthProvider>
            </LanguageProvider>
          </DataProvider>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
