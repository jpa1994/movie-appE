const router = require('express').Router()

const { movieDao: dao} = require('../../daos/dao')

// http://localhost:3000/api/movie
router.get('/', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findMovieInfo(res, dao.table)
})

// http://localhost:3000/api/get_movies/4OldestMovies
router.get('/get_movies/4OldestMovies', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findFourOldestMovies(res, dao.table)
})

// http://localhost:3000/api/movie/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router