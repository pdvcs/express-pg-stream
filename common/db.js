'use strict'

const { Pool } = require('pg')
const config = require('./config')
const pool = new Pool(config.db)

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query (query, params) {
  const { rows } = await pool.query(query, params)

  return rows
}

async function client () {
  const client = await pool.connect()
  return client
}

module.exports = {
  query,
  client
}
