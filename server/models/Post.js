import mongoose from 'mongoose'

const post = new mongoose.Schema({
    title: {type: String, required: true},
    imageUrl: {type: String},
    text: {type: String},
})

export default mongoose.model('Post', post)