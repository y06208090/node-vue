const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors'); //跨域处理
const Config = require('./config/config');
const onerror = require('koa-onerror');
const index = require('./routes/index')

const bodyparser = require('koa-bodyparser')
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
  }))
//错误信息处理
onerror(app);
app.use(cors())
app.use(index.routes(), index.allowedMethods())

//控制台打印请求信息
app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
console.log(Config)
app.listen(Config.port);