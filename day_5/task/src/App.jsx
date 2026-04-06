// 1 . task

// import { useState, useEffect } from 'react';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // We use a helper function inside useEffect for async/await
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []); // Empty array = run once on mount

//   if (loading) return <p>Loading awesome people...</p>;
//   if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

//   return (
//     <div>
//       <h2>User Directory</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// 2.task

// import { useState, useEffect } from 'react';

// const CounterTitle = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Changing the title to "Click Count: X"
//     document.title = `Click Count: ${count}`;
//   }, [count]);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ddd' }}>
//       <h2>Check your Browser Tab!</h2>
//       <p>The title will say: <strong>Click Count: {count}</strong></p>
//       <h1>{count}</h1>

//       <button
//         onClick={() => setCount(count + 1)}
//         style={{ padding: '10px 20px', cursor: 'pointer' }}
//       >
//         Click to Increment
//       </button>
//     </div>
//   );
// };

// export default CounterTitle;

// 3 .Simple To-Do App

// import { useState, useEffect } from 'react';

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     const savedTodos = localStorage.getItem('myTodos');
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });

//   const [task, setTask] = useState("");

//   useEffect(() => {
//     localStorage.setItem('myTodos', JSON.stringify(todos));
//   }, [todos]);

//   const addTask = () => {
//     if (task.trim() === "") return;
//     const newTodo = { id: Date.now(), text: task, completed: false };
//     setTodos([...todos, newTodo]);
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
//       <h2>📝 Simple To-Do</h2>

//       <div style={{ marginBottom: '10px' }}>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter a task..."
//         />
//         <button onClick={addTask}>Add</button>
//       </div>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ marginBottom: '5px' }}>
//             {todo.text}
//             <button
//               onClick={() => deleteTask(todo.id)}
//               style={{ marginLeft: '10px', color: 'red' }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       {todos.length === 0 && <p>No tasks yet. Add one!</p>}
//     </div>
//   );
// };

// export default TodoApp;

// 4 .User Login Context

// import React, { createContext, useContext, useState } from "react";
// const AuthContext = createContext();

// export default function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
//         <h1>Context Login Demo</h1>
//         <Navbar />
//         <MainContent />
//       </div>
//     </AuthContext.Provider>
//   );
// }

// // --- Component 1: Navbar ---
// function Navbar() {
//   const { user } = useContext(AuthContext);

//   return (
//     <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
//       {user ? `Welcome, ${user}!` : "Not Logged In"}
//     </nav>
//   );
// }

// // --- Component 2: Main Content ---
// function MainContent() {
//   const { user, setUser } = useContext(AuthContext);

//   return (
//     <div style={{ marginTop: "20px" }}>
//       {user ? (
//         <button onClick={() => setUser(null)}>Log Out</button>
//       ) : (
//         <button onClick={() => setUser("Guest User")}>Log In</button>
//       )}
//     </div>
//   );
// }

// 5 .

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(cartCount + 1);
  const resetCart = () => setCartCount(0);

  return (
    <CartContext.Provider value={{ cartCount, addToCart, resetCart }}>
      <div style={{ fontFamily: "sans-serif" }}>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Product Page</h2>
          <p>Super Cool T-Shirt - $20</p>
          <button onClick={addToCart}>Add to Cart 🛒</button>
        </div>
      </div>
    </CartContext.Provider>
  );
}

function Navbar() {
  const { cartCount, resetCart } = useContext(CartContext);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "#fff",
  };

  return (
    <nav style={navStyle}>
      <strong>My Store</strong>
      <div>
        <span>Items in Cart: {cartCount}</span>
        {cartCount > 0 && (
          <button onClick={resetCart} style={{ marginLeft: "10px" }}>
            Empty
          </button>
        )}
      </div>
    </nav>
  );
}
