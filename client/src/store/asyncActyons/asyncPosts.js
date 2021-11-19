import {removePostActionCreators, setPostsActionCreators} from "../actionCreators/postsActionCreators";

export const setPosts = () => {
    return async (dispatch) => {
        try {
            const url = '/api/posts'
            const method = 'GET'
            const headers = {}

            const response = await fetch(url, {method, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            dispatch(setPostsActionCreators(data))
        } catch (e) {
            alert(e.message)
        }
    }
}

export const addPost = (post) => {
    return async (dispatch) => {
        try {
            const url = '/api/posts'
            const method = 'POST'
            const body = JSON.stringify(post)
            const headers = {'Content-Type': 'application/json'}

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

        } catch (e) {
            alert(e.message)
        }
    }
}

export const removePost = (id) => {
    return async (dispatch) => {
        try {
            const url = `/api/posts/${id}`
            const method = 'DELETE'
            const headers = {'Content-Type': 'application/json'}

            const response = await fetch(url, {method, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            dispatch(removePostActionCreators(id))

        } catch (e) {
            alert(e.message)
        }
    }
}

