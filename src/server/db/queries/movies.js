const knex = require('../connection')

const getAllMovies = () => {
  return knex('movies')
    .select('*')
}

const getSingleMovie = id => {
  return knex('movies')
    .select('*')
    .where({id: parseInt(id)})
}

module.exports = {
  getAllMovies,
  getSingleMovie
}
