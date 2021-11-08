
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

