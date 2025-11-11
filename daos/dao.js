const daoCommon = require('./common/daoCommon')

const actorDao = {
    ...daoCommon,
    ...require('./api/actorDao')
}

const directorDao = {
    ...daoCommon,
    ...require('./api/directorDao')
}

const genreDao = {
    ...daoCommon,
    ...require('./api/genreDao')
}

const movieDao = {
    ...daoCommon,
    ...require('./api/movieDao')
}

const productionDao = {
    ...daoCommon,
    ...require('./api/productionDao')
}

const streamingPlatformDao = {
    ...daoCommon,
    ...require('./api/streamingPlatformDao')
}

module.exports = {
    actorDao,
    directorDao,
    genreDao,
    movieDao,
    productionDao,
    streamingPlatformDao
}