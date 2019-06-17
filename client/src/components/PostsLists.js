import React, { Component } from 'react';
import { getPosts, createPost } from '../util';
import { Link } from 'react-router-dom';

class PostsList extends Component {
  state = {
    posts: [],
    newPost: {}
  };

  componentDidMount() {
    getPosts().then(posts => {
      console.log(posts.data);
      this.setState({ posts: posts.data });
    });
  }

  handleNewPostChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newPost = { ...this.state.newPost };
    newPost[attributeName] = attributeValue;
    this.setState({ newPost });
    console.log(this.state.newPost)
  };

  addNewPost = event => {
    event.preventDefault();
    // console.log(this.state.newPost)
    this.addNewPostToPostList(this.state.newPost);
    // this.state.refresh();
  };

  addNewPostToPostList = newPost => {
    console.log(newPost)
    createPost(newPost).then(() => {
      getPosts().then(postsList => {
        this.setState({ posts: postsList.data });
      });
    });
  };

  render() {
    return (
      <div>
        
      <form onSubmit={this.addNewPost}>
          <div>
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={this.handleNewPostChange}
            />
            <input
              name="body"
              type="text"
              placeholder="Body"
              onChange={this.handleNewPostChange}
            />
            <input
              name="created_at"
              type="text"
              placeholder="created_at"
              defaultValue='now'
              onChange={this.handleNewPostChange}
            />
            <input
              name="author"
              type="text"
              placeholder="Author"
              onChange={this.handleNewPostChange}
            />
          </div>
          <div>
            <input type="submit" value="Create New Post" />
          </div>
        </form>

        <div className="listOfPosts">
          {this.state.posts.map(post => {
            let linkVar = `/posts/${post.id}`;
            return (
              <h2>
                <li key={post.id}>
                  <Link to={linkVar}>{post.title}</Link>
                </li>
              </h2>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostsList;
