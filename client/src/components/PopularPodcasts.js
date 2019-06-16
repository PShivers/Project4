import React, { Component } from 'react';
import {getPopularPodcasts} from '../util'

class PopularPodCasts extends Component {
    state = { 
        popularPodcasts: []
     }


    componentDidMount() {
        getPopularPodcasts().then(podcasts =>{
            console.log(podcasts)
            this.setState({popularPodcasts: podcasts.data})
        })
    }

    render() { 
        return ( <h1>Popular PodCasts</h1> );
    }
}
 
export default PopularPodCasts;