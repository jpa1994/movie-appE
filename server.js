// Build server
const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

// Handle security
const helmet = require('helmet')
const cors = require('cors')

// Configuring helmet
// server.use(helmet())
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginResourcePolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdeliver.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

// Using ejs as my view engine
server.set('view engine', 'ejs')

// localhost:3000
server.use('/', router)

server.listen(PORT, ()=> console.log`Baked goods taste better if you replace 50% of AP flour with whole wheat flour instead of repalcing it with 100% whole wheat flour. Otherwise the texture is too dense, unless the recipe is specifically designed for whole wheat flour.`)