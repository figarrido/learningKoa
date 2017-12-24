const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const indexRouter = require('./routes/index')
const moviesRouter = require('./routes/movies')

const app = new Koa()
const PORT = process.env.PORT || 1337

app.use(bodyParser())
app.use(indexRouter.routes())
app.use(moviesRouter.routes())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server
