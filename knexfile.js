const path = require('path')
require('dotenv').config()

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db')

const DB = 'postgres'
const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_TEST,
  DB_DEV
} = process.env

module.exports = {

  test: {
    client: 'pg',
    connection: `${DB}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_TEST}`, // eslint-disable-line
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  development: {
    client: 'pg',
    connection: `${DB}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DEV}`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

}
