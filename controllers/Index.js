const { redisGet, redisSet } = require("../libs/redisClient");
const { getCourses } = require("../services/Course");
const { API } = require("../config/error_config");
const { returnInf } = require("../libs/utils");
class Index {
  async index(ctx, next) {
    //渲染页面
    await ctx.render("index");
  }

  async getCourseData(ctx, next) {
    const data = await getCourses();
    ctx.body = data
      ? returnInf(API.RETURN_SUCCESS, data)
      : returnInf(API.RETURN_ERROR);
  }

  async postDataDemo(ctx, next) {
    console.log("-------------------------------",ctx.request.body);

    ctx.body = returnInf(API.RETURN_SUCCESS);
  }

  async setRedisData(ctx, next) {
    const sess = ctx.session;

    if (!sess.uid) {
      sess.uid = 1;
      sess.username = "jsjiajia";
      sess.nickname = "js++";
      sess.gender = "male";
    }

    ctx.body = {
      session: sess,
    };

    //渲染页面
    // await ctx.render("set-redis-data");
  }

  async getRedisData(ctx, next) {
    redisGet("txclass.sess6MrilfazOVEmuDcKBnhOg8vChNq4nUos").then((res) => {
      console.log(res);
    });

    //渲染页面
    await ctx.render("get-redis-data");
  }
}

module.exports = new Index();
