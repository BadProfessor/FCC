import React from 'react';
// delete above in codepen

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+ ', '='];

class App extends React.Component {
  handleClick = (e) => {
    const { value } = e.target;
  };

  render() {
    return (
      <div className="calculator">
        <div id="display" className="display">
          <div>1500</div>
        </div>
        <div className="nums-container">
          <button className="big-h light-grey ac" onClick={this.handleClick}>
            AC
          </button>
          {nums.map((num) => (
            <button className={`dark-grey ${num === 0 && 'big-h'}`} key={num}>
              {num}
            </button>
          ))}
          <button className="light-grey">.</button>
        </div>
        <div className="ops-container">
          {ops.map((op) => (
            <button className="orange" key={op}>
              {op}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

//// uncomment this in codepen
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// delete this in codepen
export default App;

// https://www.youtube.com/watch?v=NGOzAaJRPQU
// 44:00x
