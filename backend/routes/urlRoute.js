import express from 'express'

const router = express.Router()

router.post('/shorturls', createShortUrl)
router.get('/shorturls/:id', retrieveUrl)

export default router