import React from 'react';
import ReactDOM from 'react-dom';
// we need in codepen React, ReactDOM, Bootstrap

class App extends React.Component {
  state = {
    markdown: '',
  };

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value,
    });
  };

  render() {
    const { markdown } = this.state;

    return (
      <div>
        <h2 className="text-center m-4">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h5>Enter your Markdown here:</h5>
            <textarea
              className="form-control"
              id="editor"
              value={markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6" id="preview">
            <h5>See the result:</h5>
            <div className="preview">
              <p>Hello Preview</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
// we need the above line in codepen

// https://www.youtube.com/watch?v=CJt7uZD_iK0
// 12:48

export default App;
