import React from 'react';
import ReactDOM from 'react-dom';
// we will not need the above in the codepen .js file
// we need the index.html body, index.css code, App.js code, React, ReactDom, fontawesome, Bootstrap

const API =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {
  state = {
    quotes: [
      {
        quote:
          'Life isn’t about getting and having, it’s about giving and being.',
        author: 'Kevin Kruse',
      },
    ],
    index: 0,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            quotes: res.quotes,
          },
          this.getRandomIndex
        );
      });
  }

  getRandomIndex = () => {
    const { quotes } = this.state;

    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({ index });
    }
  };

  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.quote} ${quote.author}`;

    return (
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="col-6 box p-4 rounded" id="quote-box">
          {quote && (
            <div className="mb-3">
              <h6 id="text">
                <i className="fas fa-quote-left"></i> {quote.quote}
              </h6>
              <cite className="d-block text-right" id="author">
                {quote.author}
              </cite>
            </div>
          )}
          <div className="d-flex justify-content-between">
            <a
              className="btn btn-sm btn-primary"
              id="tweet-quote"
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> Tweet
            </a>
            <button
              className="btn btn-sm btn-primary"
              id="new-quote"
              onClick={this.getRandomIndex}
            >
              <i className="fas fa-random"></i> Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// we need this in the codepen .js file
// ReactDOM.render(<App />, document.getElementById('root'));
// but not this
export default App;

// https://www.youtube.com/watch?v=iGWei_0EJIc
// 10:08
