'use strict'

const express = require('express')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const employeeRouter = require('./routes/employee')
const streamRouter = require('./routes/stream')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)

app.use('/', indexRouter)
app.use('/employee', employeeRouter)
app.use('/stream', streamRouter)

const port = process.env.HTTP_PORT ?? 5000
app.listen(port, () => {
  console.log(`App started, listening on port ${port}`)
})

module.exports = app
