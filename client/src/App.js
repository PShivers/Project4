import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import styled from 'styled-components';
import UsersList from './components/UsersList';
import SingleUser from './components/SingleUser';
import PostsList from './components/PostsLists';
import SinglePost from './components/SinglePost';
import Search from './components/Search';
import SideBar from './components/SideBar';
import PopularPodcasts from './components/PopularPodcasts';
import KanyeQuote from './components/KanyeQuote';
import SinglePodcast from './components/SinglePodcast';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Search />
        <Main>
          <SideBar />
          <Switch>
            <Body>
              <Route
                exact
                path="/podcasts/popular"
                component={PopularPodcasts}
              />
              <Route
                exact
                path="/podcasts/:id"
                component={SinglePodcast}
              />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/users/:id" component={SingleUser} />
              <Route exact path="/posts" component={PostsList} />
              <Route exact path="/posts/:id" component={SinglePost} />
              <Route exact path="/kanye" component={KanyeQuote} />
            </Body>
          </Switch>
        </Main>
        <KanyeQuote/>
      </Router>
    </AppWrapper>
  );
}

export default App;
