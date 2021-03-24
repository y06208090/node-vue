const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  ctx.body = '这是登录接口';
  ctx.response.body={success:true,code:20000,message:"登录成功",data:{token:"admin-token"}}
})

router.get('/user/info', async (ctx, next) => {
  ctx.response.body={success:true,code:20000,message:"token验证成功",data:{name:"曹石磊"}}
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
