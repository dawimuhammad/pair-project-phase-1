const express  = require('express')
const app = express()
const ejs = require('ejs')
const routes = require('./routes')
const administratorRoutes = require('./routes/administrator')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs')

app.use('/', routes)

app.use('/administrator', administratorRoutes)

app.listen(3000)
