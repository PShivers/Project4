import React, { Component } from 'react';
import {getPodcast} from '../util'

class SinglePodcast extends Component {
  state = {
    podcast: {}
  };

  componentDidMount() {
    getPodcast().then(podcast => {
      this.setState({ podcast: podcast.data });
    });
  }

  render() {
    return (
      <div>
        <div>hi</div>
      </div>
    );
  }
}

export default SinglePodcast;
