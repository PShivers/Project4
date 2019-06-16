import React, { Component } from 'react';
import { getKanyeQuote } from '../util';

class KanyeQuote extends Component {
  state = {
    quote: ''
  };

  componentDidMount() {
    getKanyeQuote().then(response => {
      console.log(response);
      this.setState({ quote: response.data.quote });
      console.log(this.state.quote);
    });
  }

  render() {
    return (
      <div>
        <div>YO check out this quote:</div>
        <div>{this.state.quote}</div>
      </div>
    );
  }
}

export default KanyeQuote;
