const router = require('express').Router()

const { streamingPlatformDao: dao} = require('../../daos/dao')

// http://localhost:3000/api/streaming_platform
router.get('/', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findStreamingPlatformInfo(res, dao.table)
})

// http://localhost:3000/api/streaming_platform/
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/streaming_platform/streaming_platform_count
router.get('/streaming_platform_count', (req, res)=> {
    // dao.findAll(req, res, dao.table)
    dao.findStreamingPlatformCount(res, dao.table)
})

// http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// http://localhost:3000/api/streaming_platform/create
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

// PATCH
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router