const Koa = require('koa')
const indexRouter = require('./routes/index')

const app = new Koa()
const PORT = 1337

app.use(indexRouter.routes())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server
