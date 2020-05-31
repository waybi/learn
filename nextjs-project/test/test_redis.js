const config = require("../config");
const Redis = require("ioredis");

async function test() {
  const redis = new Redis(config.redis);

  const keys = await redis.keys("*");
  const kk = await redis.get("apikey-32efc7d8");

  console.log(kk);
}

test();
