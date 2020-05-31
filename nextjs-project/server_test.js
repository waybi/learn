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
const api = require("./server/api");

let index = 0;

// 需要开启数据库就解除这个注释
const redis = new Redis(config.redis);

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // 路由映射
  router.get("/a/:id", async ctx => {
    const id = ctx.params.id;

    await handle(ctx.req, ctx.res, {
      pathname: "/a",
      query: { id }
    });
    ctx.response = false;
  });

  server.use(router.routes());

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);

    ctx.response = false;
  });


  server.listen(3333, () => {
    console.log("> Ready on http://localhost:3333");
  });
});
