import React, { Component } from 'react';
import { getPopularPodcasts } from '../util';
import { Link } from 'react-router-dom';

class PopularPodCasts extends Component {
  state = {
    popularPodcasts: []
  };

  componentDidMount() {
    getPopularPodcasts().then(podcasts => {
      this.setState({ popularPodcasts: podcasts.data.podcasts });
      console.log(this.state.popularPodcasts);
    });
  }

  render() {
    return (
      <div>
        <h1>Popular PodCasts</h1>
        <div>
          {this.state.popularPodcasts.map(podcast => {
            let linkVar = `/podcasts/${podcast.id}`;
            return (
              <h2>
                <li key={podcast.id}>
                  <Link to={linkVar}>{podcast.title}</Link>
                </li>
              </h2>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PopularPodCasts;
