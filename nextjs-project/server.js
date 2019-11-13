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
const handle = app.getRequestHandler(); // 处理http请求
const api = require('./server/api')

let index = 0;

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


  //   router.get('/a/:id', async ctx => {
  //     const id = ctx.params.id
  //     console.log(id);

  //     await handle(ctx.req, ctx.res, {
  //       pathname: '/a',
  //       query: { id }
  //     })
  //     ctx.response = false
  //   })

  server.use(async (ctx, next) => {
    // console.log("session is:", ctx.session);

    await next();
  });

  router.get("/set/user", async ctx => {
    // ctx.response = false;
    ctx.session.user = {
      name: "waybi",
      age: 18
    };

    ctx.body = "set session success";
  });

  server.use(async (ctx, next) => {
    // console.log(ctx.cookies.get("jid"));

    await next();
  });

  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.cookies.set("id", index, {
      httpOnly: false
    });
    index += 1;
    await handle(ctx.req, ctx.res);
    ctx.response = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
});
