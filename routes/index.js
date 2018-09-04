// routes/index.js
const router = require('koa-router')()

module.exports = (app) => {
  router.get('/', require('./home').index)
  router.get('/about', require('./about').index)

  app
    .use(router.routes())
    .use(router.allowedMethods())
}

// routes/home.js
module.exports = {
  async index (ctx, next) {
    await ctx.render('index', {
      title: 'abc-blog',
      desc: '欢迎关注公众号 JavaScript之禅'
    })
  }
}