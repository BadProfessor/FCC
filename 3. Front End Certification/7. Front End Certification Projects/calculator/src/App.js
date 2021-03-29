import React from 'react';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+', '='];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    calc: '0',
    operation: undefined,
  };

  handleClick = (e) => {
    const { calc, lastPressed } = this.state;
    const { innerText } = e.target;

    console.log(innerText);

    switch (innerText) {
      case 'AC': {
        this.setState({
          calc: '0',
        });
        break;
      }
      case '=': {
        const evaluated = eval(calc);
        this.setState({
          calc: evaluated,
        });
        break;
      }
      default: {
        let e = undefined;

        if (ops.includes(innerText)) {
          if (ops.includes(lastPressed)) {
            e = calc.slice(0, -3) + ` ${innerText} `;
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          e = calc === '0' ? innerText : calc + innerText;
        }

        this.setState({
          calc: e,
          lastPressed: innerText,
        });
      }
    }
  };

  render() {
    const { calc } = this.state;

    return (
      <div className="calculator">
        <p style={{ position: 'absolute', top: 0 }}>
          {JSON.stringify(this.state, null, 2)}
        </p>
        <div id="display" className="display">
          {calc}
        </div>
        <div className="nums-container">
          <button className="big-h light-grey ac" onClick={this.handleClick}>
            AC
          </button>
          {nums.map((num) => (
            <button
              className={`dark-grey ${num === 0 && 'big-h'}`}
              key={num}
              onClick={this.handleClick}
            >
              {num}
            </button>
          ))}
          <button className="light-grey" onClick={this.handleClick}>
            .
          </button>
        </div>
        <div className="ops-container">
          {ops.map((op) => (
            <button className="orange" key={op} onClick={this.handleClick}>
              {op}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default App;

// https://www.youtube.com/watch?v=NGOzAaJRPQU
// 2:10:30
