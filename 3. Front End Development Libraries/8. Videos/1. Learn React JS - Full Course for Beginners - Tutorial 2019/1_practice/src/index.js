import React from 'react';
import ReactDOM from 'react-dom';

// // Practice 1
// const App = () => {
//   return (
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   );
// };

// //Practice 2
// function App() {
//   return (
//     <div>
//       <h1>Name</h1>
//       <p>Paragraph</p>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </div>
//   );
// }

// // Practice 3
// import MyInfo from './components/MyInfo';
// function App() {
//   return <MyInfo />;
// }

// import
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
