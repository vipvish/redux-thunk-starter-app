import { PostActionType as action } from "./types";

import axios from "axios";

//get all post
export const getPosts = () => async (dispatch) => {

  const url = (localStorage.getItem('mode') === 'offline') ? "http://localhost/api/api/getPosts" : "https://jsonplaceholder.typicode.com/posts";

  const result = await axios.get(url);
  
  dispatch({
    type : action.GET_POSTS,
    payload : result.data
  })

}

// get a post
export const selectPost = (id) => ({
  type: action.SELECT_POST,
  payload: id,
});

// create a post
export const createPost = (post) => async (dispatch) => {

  const url = (localStorage.getItem('mode') === 'offline') ? "http://localhost/api/api/postAction" : "https://jsonplaceholder.typicode.com/posts";

  const result = await axios.post(url,post,{headers:{"Content-Type" : "application/x-www-form-urlencoded"}});

  dispatch({
    type: action.CREATE_POST,
    payload: result.data,
  })
};

// update a post
export const updatePost = (post) => async (dispatch) => {

  const url = (localStorage.getItem('mode') === 'offline') ? `http://localhost/api/api/postAction/${post.id}` : `https://jsonplaceholder.typicode.com/posts/${post.id}`;

  const result = await axios.post(url,post,{headers:{"Content-Type" : "application/x-www-form-urlencoded"}});

  dispatch({
    type: action.UPDATE_POST,
    payload: result.data,
  })

};

// delete a post
export const deletePost = (id) => async (dispatch) => {

  const url = (localStorage.getItem('mode') === 'offline') ? `http://localhost/api/api/postAction/${id}/delete` : `https://jsonplaceholder.typicode.com/posts/${id}`;

  await axios.delete(url,'',{headers:{"Content-Type" : "application/x-www-form-urlencoded"}});

  dispatch({
    type: action.DELETE_POST,
    payload: id,
  })

};
