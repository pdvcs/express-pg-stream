'use strict'

const express = require('express')
const router = express.Router()
const employeeService = require('../services/employee')

router.get('/:id', async function (req, res) {
  try {
    const { id } = req.params
    const r = await employeeService.employee(id)
    res.json(r)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
