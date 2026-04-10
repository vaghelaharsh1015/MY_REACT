// 1.program
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }

// 2. counter appprogram
// import { useState } from "react";
// import "./App.css";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return (
//     <div className="counter-container">
//       <h1>Counter App</h1>
//       <div className="counter-display">{count}</div>
//       <div className="button-group">
//         <button onClick={decrement} className="btn btn-decrement">
//           Decrement
//         </button>
//         <button onClick={reset} className="btn btn-reset">
//           Reset
//         </button>
//         <button onClick={increment} className="btn btn-increment">
//           Increment
//         </button>
//       </div>
//     </div>
//   );
// }

// 3.show and hide program
// import { useState } from "react";
// import "./App.css";
// export default function HideText() {
//   const [show, setshow] = useState(true);

//   const showtext = () => setshow(true);
//   const hidetext = () => setshow(false);

//   if (show) {
//     return (
//       <>
//         <div>
//           <h1>my react</h1>
//         </div>
//         <div>
//           <button onClick={showtext} className="btn">show text</button>
//           <button onClick={hidetext} className="btn">hide text</button>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div>
//           <h1> </h1>
//         </div>
//         <div>
//           <button onClick={showtext} className="btn">show text</button>
//           <button onClick={hidetext} className="btn">hide text</button>
//         </div>
//       </>
//     );
//   }
// }

// 4.Input Field Tracker
// import { useState } from "react";
// export default function InputFieldTracker() {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (e) => setInputValue(e.target.value);
//   const clearInput = () => setInputValue("");

//   return (
//     <div className="tracker-container">
//       <h1>Input Field Tracker</h1>
//       <div className="input-section">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//           placeholder="Type something..."
//           className="input-field"
//         />
//         <button onClick={clearInput} className="btn btn-clear">
//           Clear
//         </button>
//       </div>
//       <div className="output-section">
//         <div className="display-box">
//           <p className="label">Your Input:</p>
//           <p className="value">{inputValue || "(empty)"}</p>
//         </div>
//         <div className="stats">
//           <p>
//             Characters: <span>{inputValue.length}</span>
//           </p>
//           <p>
//             Words:{" "}
//             <span>
//               {inputValue.trim() === ""
//                 ? 0
//                 : inputValue.trim().split(/\s+/).length}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// 5.Simple Like Button

import { useState } from "react";

export default function SimpleLikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setLikes(likes + 1);
  };

  const handleNotLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    }
  };

  return (
    <div>
      <h1>Simple Like Button</h1>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleNotLike}>Not Like</button>
      <p>{liked ? "You liked this!" : "You didn't like"}</p>
    </div>
  );
}
