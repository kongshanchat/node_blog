// index.js
const Koa = require('koa')
const router = require('./routes')
const path = require('path')
const app = new Koa()
const views = require('koa-views')
router(app)
app.use(views(path.join(__dirname, 'views'), {
    map: { html: 'nunjucks' }
}))

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})