import {Router} from 'express'
import postsController from '../controllers/posts.controller.js'

const router = Router()

router.get('/', postsController.getPosts)
router.get('/:id', postsController.getPost)
router.post('/', postsController.addPost)
router.put('/:id', postsController.updatePost)
router.delete('/:id', postsController.deletePost)

export default router