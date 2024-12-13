const { REDIS_CONF } = require("./db_config");
const ENV = require("./env_config");

module.exports = {
  qiniu: {
    keys: {
      ak: "Lmc7IEvh5ydqcdBOofZaDOmNlLgDSE7daI7RpZDz",
      sk: "x8-Wu8Te6kwEqRXKDO6m3JVXibx08g8obmDCvLO1",
    },
    bucket: {
      bbimg: {
        bucket_name: "bbimg1212",
        domain: "http://bbimg.cs100.fun/",
      },
    },
  },
  sessionInfo: {
    keys: ["ashdiahis&32e_"],
    name: "txclass.sid",
    prefix: "txclass.sess",
  },
  cookieInfo: {
    path: "/", //作用在根目录，就是全局
    httpOnly: true, //配置不可修改
    maxAge: 24 * 60 * 60 * 1000, //过期时间
  },
  redisInfo: {
    all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}`,
  },
  corsOrigin: ENV.isPrd ? "https://cs100.fun" : "http://localhost:3001",
};
