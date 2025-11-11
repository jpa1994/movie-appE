const router = require('express').Router()

const { directorDao: dao } = require('../../daos/dao')

// http://localhost:3000/api/director
router.get('/', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findDirectorInfo(res, dao.table)
})

// http://localhost:3000/api/actor/get_directors/lNameStart/:letter
router.get('/get_directors/lNameStart/:letter', (req, res)=> {
    dao.findDirectorsByLastNameStartLetter(res, dao.table, req.params.letter)
})

// http://localhost:3000/api/actor/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router