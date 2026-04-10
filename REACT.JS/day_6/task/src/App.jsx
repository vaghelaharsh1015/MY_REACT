// 1.task
// import { useContext, useState } from 'react'
// import { ThemeContext } from './ThemeContext.jsx'

// function App() {
//   const [count, setCount] = useState(0)
//   const { theme, toggleTheme } = useContext(ThemeContext)

//   return (
//     <>
//       <style>{`
//         body {
//           margin: 0;
//           min-height: 100vh;
//           background: ${theme === 'light' ? '#ffffff' : '#0f172a'};
//           color: ${theme === 'light' ? '#111827' : '#f8fafc'};
//           transition: background 0.3s ease, color 0.3s ease;
//         }

//         main {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 24px;
//         }

//         section {
//           width: min(660px, 100%);
//           background: ${theme === 'light' ? '#f8fafc' : '#111827'};
//           border-radius: 18px;
//           padding: 32px;
//         }

//         button {
//           appearance: none;
//           border: none;
//           border-radius: 9999px;
//           padding: 12px 18px;
//           cursor: pointer;
//           background: ${theme === 'light' ? '#111827' : '#f8fafc'};
//           color: ${theme === 'light' ? '#f8fafc' : '#111827'};
//         }

//         .button-row {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//         }
//       `}</style>

//       <main>
//         <section>
//           <h1>Day 6 Task</h1>
//           <p>Click the theme button to change the app theme globally.</p>
//           <div className="button-row">
//             <button type="button" className="theme-button" onClick={toggleTheme}>
//               Switch to {theme === 'light' ? 'dark' : 'light'} theme
//             </button>
//             <button type="button" className="count-button" onClick={() => setCount((value) => value + 1)}>
//               Count is {count}
//             </button>
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }

// export default App

// 2.User Login
// import { useContext } from "react";
// import { UserContext } from "./UserContext.jsx";
// import UserStatus from "./UserStatus.jsx";

// function App() {
//   const { login } = useContext(UserContext);

//   return (
//     <main>
//       <section>
//         <h1>Day 6 Task</h1>
//         <UserStatus />
//         <button type="button" onClick={login}>
//           Login
//         </button>
//       </section>
//     </main>
//   );
// }

// export default App;


// 3.task
// import { useContext } from 'react'
// import { CartContext } from './assets/CartContext.jsx'

// function App() {
//   const { cartCount, addToCart } = useContext(CartContext)

//   return (
//     <div>
//       <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
//         <h2>Navbar</h2>
//         <p>Cart Count: {cartCount}</p>
//       </nav>
//       <main style={{ padding: '20px' }}>
//         <h1>Product Page</h1>
//         <button onClick={addToCart}>Add Product to Cart</button>
//       </main>
//     </div>
//   )
// }

// export default App 

// 4.task
// import { useContext } from 'react'
// import { DataContext } from './assets/DataContext.jsx'

// function Parent() {
//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Child />
//     </div>
//   )
// }

// function Child() {
//   return (
//     <div>
//       <h3>Child Component</h3>
//       <Grandchild />
//     </div>
//   )
// }

// function Grandchild() {
//   const { message, updateMessage } = useContext(DataContext)

//   return (
//     <div>
//       <h4>Grandchild Component</h4>
//       <p>Data from context: {message}</p>
//       <button onClick={() => updateMessage('Updated message from Grandchild!')}>
//         Update Message
//       </button>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Task 4: Multiple Components Sharing Data</h1>
//       <Parent />
//     </div>
//   )
// }

// export default App 


// 5 .task 
// import { useContext } from 'react'
// import { LanguageContext } from './assets/LanguageContext.jsx'

// function App() {
//   const { toggleLanguage, t } = useContext(LanguageContext)

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
//       <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '40px 0' }}>
//         {t('hello')}
//       </p>
      
//       <button
//         onClick={toggleLanguage}
//       >
//         Convert
//       </button>
//     </div>
//   )
// }

// export default App

// 6.TASK Auth System
// import { useContext } from 'react'
// import { AuthContext } from './assets/AuthContext.jsx'

// function Navbar({ isAuthenticated, user }) {
//   return (
//     <nav    >
//       <h2 style={{ margin: 0 }}>MyApp</h2>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//         {isAuthenticated && user && (
//           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//             <span style={{ fontSize: '24px' }}>{user.image}</span>
//             <span>{user.name}</span>
//           </div>
//         )}
//         {!isAuthenticated && <span>Not Logged In</span>}
//       </div>
//     </nav>
//   )
// }

// function Profile({ user }) {
//   return (
//     <div style={{

//     }}>
//       <h3>Profile</h3>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//     </div>
//   )
// }

// function App() {
//   const { user, login, logout, isAuthenticated } = useContext(AuthContext)

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif' }}>
//       <Navbar isAuthenticated={isAuthenticated} user={user} />
      
//       <div style={{ padding: '40px 20px', textAlign: 'center' }}>
//         <h1>Auth System Demo</h1>
        
//         <div style={{ marginTop: '40px' }}>
//           {!isAuthenticated ? (
//             <button
//               onClick={login}
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//             >
//               Logout
//             </button>
//           )}
//         </div>

//         {isAuthenticated && user && (
//           <Profile user={user} />
//         )}
//       </div>
//     </div>
//   )
// }

// export default App


// 7.TASK Cart + Total Price
import { useContext } from 'react'
import { ProductContext } from './assets/ProductContext.jsx'

function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <span>{product.emoji} {product.name} - ₹{product.price}</span>
      <button onClick={() => onAddToCart(product)}>Add</button>
    </div>
  )
}

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div>
      <span>{item.emoji} {item.name} x{item.quantity} = ₹{item.price * item.quantity}</span>
      <button onClick={() => onDecrease(item.id)}>−</button>
      <button onClick={() => onIncrease(item.id)}>+</button>
    </div>
  )
}

function App() {
  const { products, cart, addToCart, removeFromCart, getTotalPrice } = useContext(ProductContext)

  return (
    <div>
      <h1>🛒 E-Commerce Store</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onIncrease={addToCart} onDecrease={removeFromCart} />
            ))}
            <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>Total: ₹{getTotalPrice()}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default App
