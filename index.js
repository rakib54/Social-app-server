import bodyParser from "body-parser"
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/post.js' 

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts',postRoutes);


const CONNECTION_URL = "mongodb+srv://socialnetwork:socialnetwork123@cluster0.c4bol.mongodb.net/Social-Network?retryWrites=true&w=majority"
const PORT = process.env.PORT || 4000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT,()=>console.log(`server running at ${PORT}`)))
    .catch(err =>console.log(err.message))

mongoose.set('useFindAndModify', false)