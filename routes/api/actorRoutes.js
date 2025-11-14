const router = require('express').Router()

const { actorDao: dao } = require('../../daos/dao')

// http://localhost:3000/api/actor
router.get('/', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findActorInfo(res, dao.table)
})

// http://localhost:3000/api/actor/get_actors/fNameStart/:letter
router.get('/get_actors/fNameStart/:letter', (req, res)=> {
    dao.findActorsByFirstNameStartLetter(res, dao.table, req.params.letter)
})

// http://localhost:3000/api/actor/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// http://localhost:3000/api/actor/create
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

// PATCH
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router