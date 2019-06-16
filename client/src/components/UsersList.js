import React, { Component } from 'react';
import { getUsers, createUser } from '../util';
import { Link } from 'react-router-dom';

class UsersList extends Component {
  state = {
    users: [],
    newUser: {}
  };

  componentDidMount() {
    getUsers().then(users => {
      this.setState({ users: users.data });
      console.log(users.data);
    });
  }

  handleNewUserChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newUser = { ...this.state.newUser };
    newUser[attributeName] = attributeValue;
    this.setState({ newUser });
    console.log(this.state.newUser)
  };

  addNewUser = event => {
    event.preventDefault();
    // console.log(this.state.newUser)
    this.addNewUserToUserList(this.state.newUser);
    // this.state.refresh();
  };

  addNewUserToUserList = newUser => {
    console.log(newUser)
    createUser(newUser).then(() => {
      getUsers().then(usersList => {
        this.setState({ users: usersList.data });
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="listOfPosts">
          {this.state.users.map(user => {
            let linkVar = `/users/${user.id}`;
            return (
              <h2>
                <li key={user.id}>
                  <Link to={linkVar}>{user.name}</Link>
                </li>
              </h2>
            );
          })}
        </div>

        <form onSubmit={this.addNewUser}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleNewUserChange}
            />
            <input
              name="photo_url"
              type="text"
              placeholder="Photo URL"
              onChange={this.handleNewUserChange}
            />
          </div>
          <div>
            <input type="submit" value="Create New User" />
          </div>
        </form>
      </div>
    );
  }
}

export default UsersList;
