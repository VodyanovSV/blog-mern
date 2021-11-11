import {SET_POSTS, REMOVE_POST} from '../actions/postsActions'

export const setPostsActionCreators = (payload) => {
    return ({
        type: SET_POSTS,
        payload
    })
}

export const removePostActionCreators = (id) => {
    return ({
        type: REMOVE_POST,
        payload: id
    })
}