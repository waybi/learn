const Koa = require("koa");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const Router = require("koa-router");
const session = require("koa-session");
const app = next({ dev });
const Redis = require("ioredis");
const config = require("./config");
const auth = require("./server/auth");
const RedisSessionStore = require("./server/session-store");
const api = require('./server/api')
const handle = app.getRequestHandler()

// 需要开启数据库就解除这个注释
const redis = new Redis(config.redis);

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.keys = config.keys;
  const SESSION_CONFIG = {
    key: "jid",
    // 需要开启数据库就解除这个注释
    store: new RedisSessionStore(redis)
  };
  
  // use koa-session
  server.use(session(SESSION_CONFIG, server));

  //配置处理github的 oauth登录
  auth(router);
  api(router);

  router.get('*', async ctx => {
    ctx.req.session = ctx.session
    // handle的API在这里
    // https://github.com/zeit/next.js/blob/canary/packages/next-server/server/next-server.ts
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.listen(3333, () => {
    console.log("> Ready on http://localhost:3333");
  });
});
