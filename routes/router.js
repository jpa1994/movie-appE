const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Home Page => http://localhost:3000
router.get('/', (req,res)=> {
    res.render('pages/home', {
        title: 'movie-app home',
        name: "John's Movie App"
    })
})

// Actor-Form => http://localhost:3000/actor-form
router.get('/actor-form', (req, res)=> {
    res.render('pages/actor-form', {
        title: 'actor form',
        name: 'actor-form'
    })
})

// Director-Form => http://localhost:3000/director-form
router.get('/director-form', (req, res)=> {
    res.render('pages/director-form', {
        title: 'director form',
        name: 'director-form'
    })
})

// Genre-Form => http://localhost:3000/genre-form
router.get('/genre-form', (req, res)=> {
    res.render('pages/genre-form', {
        title: 'genre form',
        name: 'genre-form'
    })
})

// Movie-Form => http://localhost:3000/movie-form
router.get('/movie-form', (req, res)=> {
    res.render('pages/movie-form', {
        title: 'movie form',
        name: 'movie-form'
    })
})

// Production-Form => http://localhost:3000/production-form
router.get('/production-form', (req, res)=> {
    res.render('pages/production-form', {
        title: 'production form',
        name: 'production-form'
    })
})

// Streaming_Platform-Form => http://localhost:3000/streaming_platform-form
router.get('/streaming_platform-form', (req, res)=> {
    res.render('pages/streaming_platform-form', {
        title: 'streaming platform form',
        name: 'streaming-platform-form'
    })
})


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
    //.send('<h1>404 Error: This page does not exist.</h1>')
    .render('pages/error', {
        title: 'Error Page',
        name: 'Error'
    })
})

module.exports = router