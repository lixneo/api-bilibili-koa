const ENV = require("./env_config");

module.exports = {
  MYSQL_CONF: {
    base: {
      host: "localhost",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
    // conf: ["txclass", "root", ENV.isPrd ? "12345678" : "root"],
    conf: ["txclass", "root", ENV.isPrd ? "12345678" : "shuai123"],
  },
  REDIS_CONF: ["6379", "127.0.0.1"],
};
