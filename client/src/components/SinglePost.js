import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getSinglePost,
  getSingleUser,
  deletePost,
  createComment,
  deleteComment
} from '../util';

class SinglePost extends Component {
  state = {
    post: {},
    user: {},
    comments: [],
    newComment: {}
  };

  componentDidMount() {
    getSinglePost(this.props.match.params.id).then(post => {
      getSingleUser(post.data.author).then(user => {
        this.setState({
          post: post.data,
          user: user.data,
          comments: post.data.comments
        });
      });
    });
  }

  refresh() {
    getSinglePost(this.props.match.params.id).then(post => {
      getSingleUser(post.data.author).then(user => {
        this.setState({
          post: post.data,
          user: user.data,
          comments: post.data.comments
        });
      });
    });
  }

  handlePostDelete(id) {
    deletePost(id).then(() => {
      //redirect to users with refreshed list
    });
  }

  handleCommentDelete(id) {
    console.log(id);
    deleteComment(id).then(() => {
      this.refresh();
    });
  }

  handleNewCommentChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newComment = { ...this.state.newComment };
    newComment[attributeName] = attributeValue;
    newComment.post = this.state.post.id;
    this.setState({ newComment });
    console.log(this.state.newComment);
    // console.log(this.state.posts)
  };

  addNewComment = event => {
    event.preventDefault();
    // console.log(this.state.newUser)
    this.addNewCommentToComments(this.state.newComment);
    // this.state.refresh();
  };

  addNewCommentToComments = newComment => {
    // console.log(newUser)
    createComment(newComment).then(() => {
      this.refresh();
    });
  };

  render() {
    // console.log(this.state.post.comments[0].content)
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <h4>By {this.state.user.name}</h4>
        <p>{this.state.post.body}</p>

        <Link
          to="../posts"
          onClick={() => {
            this.handlePostDelete(this.props.match.params.id);
          }}
        >
          DELETE Post
        </Link>

        <h2>Comments</h2>
        
        <form onSubmit={this.addNewComment}>
          <div>
            <input
              name="content"
              type="text"
              placeholder="Comment"
              onChange={this.handleNewCommentChange}
            />
            <br/>
            <input
              name="created_at"
              type="text"
              placeholder="created_at"
              onChange={this.handleNewCommentChange}
            />
            <br/>
            <input
              name="author"
              type="text"
              placeholder="Author ID"
              onChange={this.handleNewCommentChange}
            />
            <br/>
            <input
              name="post"
              type="hidden"
              placeholder="post"
              value={this.state.post.id}
              onChange={this.handleNewCommentChange}
            />
          </div>
          <div>
            <input type="submit" value="Add Comment" />
          </div>
        </form>

        <div>
          {this.state.comments.map(comment => {
            let linkVar = `/users/${comment.author}`;
            let linkVar2 = `/posts/${this.state.post.id}`;
            return (
              <li key={comment.id}>
                {comment.content}
                <div>
                  - <Link to={linkVar}>{comment.author}</Link>
                  <div>
                    <Link
                      to={linkVar2}
                      onClick={() => {
                        this.handleCommentDelete(comment.id);
                      }}
                    >
                      Delete Comment
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </div>

        
      </div>
    );
  }
}

export default SinglePost;
