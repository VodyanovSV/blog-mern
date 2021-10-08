import Post from "../models/Post.js";


class PostsController {

    async getPosts(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (e) {
            res.status(500).json('Server error: ', e.message)
        }
    }

    async getPost(req, res) {
        try {
            const post = await Post.findById(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json('Server error: ', e.message)
        }
    }

    async addPost(req, res) {

    }

    async updatePost(req, res) {

    }

    async deletePost(req, res) {

    }
}

export default new PostsController()