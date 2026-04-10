// 1.export the compont
// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }

// 2.fixed the return statement

// export default function Profile() {
//   return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
// }

// 3. spoat the mistek
// function Profile() {
//   return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// 4.YOUR onr componet

// export default function task4() {
//   return (
//     <div>
//       <h1>my task 4 in compelt</h1>
//     </div>
//   );
// }

// 5.Try out some challenges
import Gallry from "./compontes/gallry";
import { Profile } from "./compontes/profile";

export default function App() {
  return (
    <div>
      <Profile /> 
      <Gallry />
    </div>
  );
}
