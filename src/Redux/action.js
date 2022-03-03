import { appConstants } from "./actionTypes";


export const getUsersRequest =() => {
  return {
    type: appConstants.GET_USERS_REQUEST,
    payload: {
      isLoading: true
    }
  }
}

export const getUsersSuccess = (users) => {
  return {
    type: appConstants.GET_USERS_SUCCESS,
    payload: {
      users: users
    }
  }
}

export const getUsersFailure = () => {
  return {
    type: appConstants.GET_USERS_FAILURE,
    payload: {
      isError: true
    }
  }
}

export const getUsersPostsSuccess = (posts) => {
    return {
      type: appConstants.GET_USERS_POSTS_SUCCESS,
      payload: {
        posts: posts
      }
    }
  }