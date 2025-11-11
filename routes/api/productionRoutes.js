const router = require('express').Router()

const { productionDao: dao} = require('../../daos/dao')

// http://localhost:3000/api/production
router.get('/', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findProductionInfo(res, dao.table)
})

// http://localhost:3000/api/get_production/totalNumProductions
router.get('/get_production/totalNumProductions', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.totalNumOfProductions(res, dao.table)
})

// http://localhost:3000/api/production/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router