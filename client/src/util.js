import axios from 'axios';

//=================
//== Posts ========
//=================

export function getPosts() {
  return axios.get('/api/v1/posts/');
}

export function getSinglePost(id) {
  return axios.get(`/api/v1/posts/${id}`);
}

export function createPost(newPost) {
  console.log(newPost)
  return axios.post('/api/v1/posts/', newPost);
}

export function updatePost(updatedPost) {
  console.log(updatedPost)
  return axios.put(`/api/v1/posts/${updatedPost.id}`, updatedPost);
}

export function deletePost(userId) {
  console.log(userId)
  return axios.delete(`/api/v1/posts/${userId}`);
}
//=================
//== Users ========
//=================

export function getUsers() {
  return axios.get('/api/v1/users/');
}

export function getSingleUser(id) {
  return axios.get(`/api/v1/users/${id}`);
}

export function createUser(newUser) {
  console.log(newUser)
  return axios.post('/api/v1/users/', newUser);
}

export function updateUser(updatedUser) {
  console.log(updatedUser)
  return axios.put(`/api/v1/users/${updatedUser.id}`, updatedUser);
}

export function deleteUser(userId) {
  console.log(userId)
  return axios.delete(`/api/v1/users/${userId}`);
}

//=================
//== Comments =====
//=================

export function getPostCommentsById(id) {
  return axios.get(`/api/v1/users/${id}`);
}

export function createComment(newComment) {
  console.log(newComment)
  return axios.post('/api/v1/comments/', newComment);
}

export function updateComment(updatedComment) {
  console.log(updatedComment)
  return axios.put(`/api/v1/comments/${updatedComment.id}`, updatedComment);
}

export function deleteComment(userId) {
  console.log(userId)
  return axios.delete(`/api/v1/comments/${userId}`);
}
//=================
//== Podcasts =====
//=================

export function getPopularPodcasts() {
  console.log('podcast axios req')
  return axios.get('/api/v1/podcasts/popular');
}

export function getPodcast(id) {
  console.log(id)
  return axios.get(`/api/v1/podcast/${id}`);
}

export function getKanyeQuote() {
  // console.log('kayne quote in util')
  return axios.get('/api/v1/kanye/');
}

