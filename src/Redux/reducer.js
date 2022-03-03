import { v4 as uuid } from "uuid";
import { appConstants } from "./actionTypes";

const initState = {
  users: [],
  posts: [],
  isLoading: true,
  isError: false,
};
const reducer = (state = initState, action) => {
  console.log("in reducer=", state, action )
  switch (action.type) {

    case appConstants.GET_USERS_REQUEST:{
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    }

    case appConstants.GET_USERS_SUCCESS:{
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      }
    }

    case appConstants.GET_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload.isError
      }
    }

    case appConstants.GET_USERS_POSTS_SUCCESS:{
      return {
        ...state,
        posts: action.payload.posts,
        isLoading: false
      }
    }

    default:
      return state;
  }
};

export default reducer;