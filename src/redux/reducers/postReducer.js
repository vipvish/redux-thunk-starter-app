import { PostActionType as action } from "../actions/types";

const initialState = {
  posts: [],
  post: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case action.GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    
    case action.CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    
    case action.SELECT_POST:
      return {
        ...state,
        post: state.posts.find((postItem) => postItem.id == payload),
      };
    
    case action.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((postItem) =>
          postItem.id == payload.id ? payload : postItem
        ),
      };
    
    case action.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id != payload),
      };
    
    default:
      return state;
  }
};
