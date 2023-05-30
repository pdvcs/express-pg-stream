'use strict'

const db = require('../common/db')

async function employee (id) {
  const r = await db.query('select * from employee where id = $1', [id])
  return r
}

module.exports = {
  employee
}
