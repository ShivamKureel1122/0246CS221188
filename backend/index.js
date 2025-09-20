import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './lib/dbConnect.js'
import urlRoute from '../backend/routes/urlRoute.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.use('/', urlRoute)

app.listen(PORT, () => {
    dbConnect()
    console.log('server is running on http://localhost:' + PORT)
})