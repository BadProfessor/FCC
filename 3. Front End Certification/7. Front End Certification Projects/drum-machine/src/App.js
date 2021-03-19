import React from 'react';
import ReactDOM from 'react-dom';
// import React, ReactDOM

const App = () => {
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
};

const Box = (props) => {
  <div className="box">{props.text}</div>;
};

// uncomment in codepen.js
// ReactDOM.render(<App />, document.getElementById('root'));

// delete the following in codepen
export default App;

//https://www.youtube.com/watch?v=gXUshKPc-_g
// 7:05
// pen: https://codepen.io/badprofessor/pen/NWbmmwJ
