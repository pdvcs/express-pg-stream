'use strict'

const express = require('express')
const router = express.Router()
const db = require('../common/db')
const QueryStream = require('pg-query-stream')
const JSONStream = require('JSONStream')

// use `curl -JO http://localhost:5000/stream` to save
// filenames based on the Content-Disposition header.

router.get('/', async function (req, res) {
  let client
  try {
    client = await db.client()
    const query = new QueryStream('SELECT * FROM generate_series(0, $1) num', [1000])
    const stream = client.query(query)
    // res.writeHead(200, {
    //   'Content-Disposition': 'attachment; filename=foo.json',
    //   'Content-Type': 'application/json'
    // })
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    stream.pipe(JSONStream.stringify()).pipe(res)
    stream.on('end', () => {
      res.end()
    })
  } catch (err) {
    console.log('/stream:', err.message)
  } finally {
    if (client) client.release()
  }
})

module.exports = router
