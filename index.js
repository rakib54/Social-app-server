import bodyParser from "body-parser"
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/post.js' 

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts',postRoutes);

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT,()=>console.log(`server running at ${PORT}`)))
    .catch(err =>console.log(err.message))

mongoose.set('useFindAndModify', false)

app.use((req , res )=>{
    res.send('Facebook Lite')
})