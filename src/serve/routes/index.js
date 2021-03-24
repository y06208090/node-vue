const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const tokenConfig = {privateKey: 'xxxxxx'} // 加密密钥
const url = require("url")
const querystring = require("querystring");
router.post('/login', async (ctx, next) => {
  ctx.body = '这是登录接口';
  const data = ctx.request.body
  console.log(ctx.request.body);
  const {username,password}=data;
  const userInfo = {username: '', userID: ''}
      const token = jwt.sign(userInfo, tokenConfig.privateKey, {expiresIn: '7d'}) // 签发 token， 7天有效期
  ctx.response.body={success:true,code:20000,message:"登录成功",data:{token:token}}
})

router.get('/user/info', async (ctx, next) => {
const urlString=ctx.request.url

 
 console.log(url.parse(urlString));
 let token=querystring.parse(url.parse(urlString).query).token
 console.log(token);
  ctx.response.body={success:true,code:20000,message:"token验证成功",data:{name:"曹石磊"}}
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
