import React from 'react';
// import React, ReactDOM

const sounds = [
  {
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

// const extraSounds = [
//   'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
//   'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
// ];

const App = () => (
  <div id="drum-machine" className="container">
    <div id="display" className="display">
      {sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.mp3} />
      ))}
    </div>
  </div>
);

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.text}
        <audio />
      </div>
    );
  }
}

// uncomment in codepen.js
// ReactDOM.render(<App/>, document.getElementById('root'));

// delete the following in codepen
export default App;

// https://www.youtube.com/watch?v=gXUshKPc-_g
// 36:18
// pen: https://codepen.io/badprofessor/pen/NWbmmwJ
