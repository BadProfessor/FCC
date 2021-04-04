import React from 'react';
// cut

class App extends React.Component {
  render() {
    return (
      <div>
        <div class="flex">
          <SetTimer />
          <SetTimer />
        </div>
        <div>Clock goes here</div>
      </div>
    );
  }
}

const SetTimer = () => (
  <div className="timer-container">
    <h1>Break Time</h1>
    <div className="flex">
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

// cut
export default App;

// https://www.youtube.com/watch?v=5rz6XbrCqt0
// 14:30
