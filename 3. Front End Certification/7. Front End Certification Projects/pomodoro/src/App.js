import React from 'react';
// cut

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loop = undefined;
  }
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: 'Session',
    isPlaying: false,
    loop: undefined,
  };

  handlePlayPause = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      clearInterval(this.loop);

      this.setState({
        isPlaying: false,
      });
    } else {
      this.setState({
        isPlaying: true,
      });

      this.loop = setInterval(() => {
        const { clockCount } = this.state;

        this.setState({
          clockCount: clockCount - 1,
        });
      }, 1000);
    }
  };

  componentWillMount() {
    clearInterval(this.loop);
  }

  convertToTime = (count) => {
    const minutes = Math.floor(count / 60);
    let seconds = count % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  render() {
    const {
      breakCount,
      sessionCount,
      clockCount,
      currentTimer,
      isPlaying,
    } = this.state;

    const breakProps = {
      title: 'Break Length',
      count: breakCount,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease,
    };

    const sessionProps = {
      title: 'Session Length',
      count: sessionCount,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease,
    };

    return (
      <div>
        <div className="flex">
          <SetTimer {...breakProps} />
          <SetTimer {...sessionProps} />
        </div>
        <div className="clock-container">
          <h1>{currentTimer}</h1>
          <span>{this.convertToTime(clockCount)}</span>

          <div className="flex">
            <button onClick={this.handlePlayPause}>
              <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
            </button>
            <button onClick={this.handleReset}>
              <i className="fas fa-sync" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const SetTimer = (props) => (
  <div className="timer-container">
    <h2>{props.title}</h2>
    <div className="flex actions-wrapper">
      <button onClick={props.handleDecrease}>
        <i className="fas fa-minus" />
      </button>
      <span>{props.count}</span>
      <button onClick={props.handleIncrease}>
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
// 45:50
