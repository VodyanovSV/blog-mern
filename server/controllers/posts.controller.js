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
        try {
            const post = new Post({title: req.body.title, imageUrl: req.body.url, text: req.body.content})
            await post.save()
            res.json('Post has been created')
        } catch (e) {
            res.status(500).json('Server error: ', e.message)
        }
    }

    async updatePost(req, res) {
        try {
            const data = await Post.updateOne({_id: req.params.id}, {title: req.body.title, imageUrl: req.body.imageUrl, text: req.body.text})
            res.json(data)
        } catch (e) {
            res.status(500).json('Server error: ', e.message)
        }
    }

    async deletePost(req, res) {
        try {
            const data = await Post.deleteOne({_id: req.params.id})
            res.json(data)
        } catch (e) {
            res.status(500).json('Server error: ', e.message)
        }
    }
}

export default new PostsController()