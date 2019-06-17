import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSingleUser, deleteUser, updateUser } from '../util';


class SingleUser extends Component {
  state = {
    user: {},
    posts: [],
    comments: [],
    updatedUser: {}
  };

  componentDidMount() {
    getSingleUser(this.props.match.params.id).then(user => {
      this.setState({
        user: user.data,
        posts: user.data.posts,
        comments: user.data.comments
      });
    });
  }

  handleDelete(id) {
    deleteUser(id).then(() => {});
  }

  handleChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const updatedUser = { ...this.state.updatedUser };
    updatedUser[attributeName] = attributeValue;
    updatedUser.id = this.state.user.id;
    this.setState({ updatedUser });
    console.log(this.state.updatedUser);
  };

  handleUpdate = event => {
    event.preventDefault();
    console.log('update clicked');
    updateUser(this.state.updatedUser).then(() => {
      getSingleUser(this.props.match.params.id).then(user => {
        this.setState({ user: user.data });
      });
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <img src={this.state.user.photo_url} alt="new" />


        <div>Edit User</div>
        <br />
        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            name="name"
            placeholder="Change Name"
            value={this.state.updatedUser.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="photo_url"
            placeholder="Change Photo URL"
            value={this.state.updatedUser.photo_url}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit Changes" />
        </form>

        <br />

        <Link
          to="../users"
          onClick={() => {
            this.handleDelete(this.props.match.params.id);
          }}
        >
          DELETE User
        </Link>

        {/* <p>{this.state.user.photo_url}</p> */}

        <h2>User's Favorites</h2>

        <h2>User's Posts</h2>

        <div>
          {this.state.posts.map(post => {
            let linkVar = `/posts/${post.id}`;
            return (
              <div>
                <li key={post.id}>
                  <Link to={linkVar}>{post.title}</Link>
                </li>
              </div>
            );
          })}
        </div>

        <h2>User's Comments</h2>

        <div>
          {this.state.comments.map(comment => {
            let linkVar = `/posts/${comment.post}`;
            return (
              <div>
                <li key={comment.id}>
                  <Link to={linkVar}>{comment.content}</Link>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SingleUser;
