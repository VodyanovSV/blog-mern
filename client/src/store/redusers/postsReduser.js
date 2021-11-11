import {SET_POSTS, REMOVE_POST} from "../actions/postsActions";

const initialState = {
    posts: []
}

export const postsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: [...action.payload]}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter((post) => (post._id !== action.payload))}
        default:
            return state
    }
}