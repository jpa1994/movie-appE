const router = require('express').Router()

const { genreDao: dao} = require('../../daos/dao')

// http://localhost:3000/api/genre
router.get('/', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findGenreInfo(res, dao.table)
})

// http://localhost:3000/api/genre/amount_of_each_genre
router.get('/amount_of_each_genre', (req, res)=> {
    dao.findNumberofEachGenre(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/actor/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// http://localhost:3000/api/genre/create
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

// PATCH
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router