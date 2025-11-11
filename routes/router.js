const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Root Route => http://localhost:3000/api
router.get('/api', (req, res)=> {
    // res.send('actor api')
    res.json({
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Drirectors': `http://localhost:${PORT}/api/director`,
        'All Genres': `http://localhost:${PORT}/api/genre`,
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Productions': `http://localhost:${PORT}/api/production`,
        'All Streaming Platforms': `http://localhost:${PORT}/api/streaming_platform`
    })
})

const endpoints = [
    'actor',
    'director',
    'genre',
    'movie',
    'production',
    'streaming_platform'
]

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

// Error handling
router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error: This page does not exist.</h1>')
})

module.exports = router