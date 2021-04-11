import React from 'react';

// // Practice 4
// import Footer from './Footer';
// function App() {
//   return (
//     <div>
//       <nav>
//         <h1>Hello World!</h1>
//         <p>Paragraph</p>
//         <ul>
//           <li>1</li>
//           <li>2</li>
//           <li>3</li>
//         </ul>
//       </nav>
//       <main>
//         <p>Most of the content</p>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // // Practice 5
// import Footer from './Footer';
// import Nav from './Header';
// import Main from './Main';

// function App() {
//   return (
//     <div>
//       <Nav />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

// // // Practice 6
// function App() {
//   // const firstName = 'Bob';
//   // const lastName = 'Ziroll';
//   const date = new Date();

//   return (
//     <div>
//       <h1>
//         {/* Hello {firstName} {lastName} */}
//         It is current about {date.getHours() % 12} o'clock!
//       </h1>
//     </div>
//   );
// }

// // // Practice 7
// function App() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = 'morning';
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = 'afternoon';
//   } else {
//     timeOfDay = 'night';
//   }

//   return (
//     <div>
//       <h1>Good {timeOfDay}</h1>
//     </div>
//   );
// }

// // Practice 8
function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  const styles = { color: '#FF8C00', backgroundColor: '#FF2D00' };

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}</h1>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=DLX62G4lc44
// 1:0:21
// https://scrimba.com/learn/learnreact
