import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
// we need in codepen React, ReactDOM, Bootstrap, marked library
// npm install --save marked

const initialState = `
This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading

## Heading

- list item 1
- list item 2
- list item 3


[Visit my website](http://example.com/)

This is inline code: \`<div></div>\`

This is a block of code:

\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`

![React](https://www.freecodecamp.org/icons/icon-96x96.png?v=6cba562cbd10e31af925a976f3db73f7)
`;

class App extends React.Component {
  state = {
    text: initialState,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return (
      <div>
        <h2 className="text-center m-4 text-white">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center text-white">Enter your markdown:</h5>
            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h5 className="text-center text-white">See the result:</h5>
            <div
              className="preview rounded"
              id="preview"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
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
