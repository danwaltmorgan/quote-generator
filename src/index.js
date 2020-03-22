import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      author: null,
      index: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.randomQuote = this.randomQuote.bind(this);
  }
  randomQuote(index) {
    let comp = this;
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      comp.setState({
        quote: data[index]["text"],
        author: data[index]["author"],
        index: index,
      })
    })
  }
  componentDidMount() {
    let index = Math.floor(Math.random() * 1644)
    this.randomQuote(index);
  }

  handleClick() {
    let index = Math.floor(Math.random() * 1644);
    if (index === this.state.index) {
      while(index === this.state.index) {
        index = Math.floor(Math.random() * 2);
      }
    }
    this.randomQuote(index)
  }


  render() {
    return (
      <div id="quote-box">
        <h2 id="text">{this.state.quote}</h2>
        <h3 id="author">-{this.state.author}</h3>
        <div id="button-div">
          <button id="new-quote" onClick={this.handleClick}>New Quote</button>
          <div id="twitter-container">
            <a id="tweet-quote" href="twitter.com/intent/tweet"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
