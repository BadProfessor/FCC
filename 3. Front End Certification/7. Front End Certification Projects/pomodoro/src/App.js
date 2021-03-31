import React from 'react';
// copy from here

class App extends React.Component {
  render() {
    return (
      <div>
        <SetTimer />
      </div>
    );
  }
}

const SetTimer = () => (
  <div className="timer-container">
    <h1>Break Time</h1>
    <div>
      <button>
        <i className="fas fa-minus" />
      </button>
      <span>5</span>
      <button>
        <i className="fas fa-plus" />
      </button>
    </div>
  </div>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// copy till here
export default App;

// https://www.youtube.com/watch?v=5rz6XbrCqt0
// 12:00
