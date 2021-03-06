import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import postsRouter from './routes/posts.router.js'

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({extended: true}))
app.use('/api/posts', postsRouter)

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}


start()

