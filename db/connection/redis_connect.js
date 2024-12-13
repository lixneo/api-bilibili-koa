const redis = require("redis"),
  { REDIS_CONF } = require("../../config/db_config");

const red = redis.createClient(REDIS_CONF);

red.on("error", (error) => {
  console.error("redis error: " + error);
});

module.exports = red;
