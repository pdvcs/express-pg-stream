'use strict'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.json({
    ok: true,
    ts: new Date().toISOString(),
    message: 'Ready'
  })
})

module.exports = router
