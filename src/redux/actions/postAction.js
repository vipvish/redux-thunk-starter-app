import { PostActionType as action } from "./types";

import axios from "axios";

//get all post
export const getPosts = () => async (dispatch) => {
   
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");

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

  const result = await axios.post("https://jsonplaceholder.typicode.com/posts",post);

  dispatch({
    type: action.CREATE_POST,
    payload: result.data,
  })
};

// update a post
export const updatePost = (post) => async (dispatch) => {

  const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post);

  dispatch({
    type: action.UPDATE_POST,
    payload: result.data,
  })

};

// delete a post
export const deletePost = (id) => async (dispatch) => {

  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

  dispatch({
    type: action.DELETE_POST,
    payload: id,
  })

};
