import React, { Component } from 'react';
import { getPopularPodcasts } from '../util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Podcast = styled.div`
  margin: 5px; 
`;

const Podcasts = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

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
        <Podcasts>
          {this.state.popularPodcasts.map(podcast => {
            let linkVar = `/podcasts/${podcast.id}`;
            return (
              <Podcast>
                <div className="podcast" key={podcast.id}>
                  <Link to={linkVar}>
                    <img src={podcast.image} alt="new" />
                  </Link>
                </div>
              </Podcast>
            );
          })}
        </Podcasts>
      </div>
    );
  }
}

export default PopularPodCasts;
