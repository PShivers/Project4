import React, { Component } from 'react';
import { getPodcast } from '../util';

class SinglePodcast extends Component {
  state = {
    podcast: {}
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    getPodcast(this.props.match.params.id).then(podcast => {
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
