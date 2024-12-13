// const { redisGet, redisSet } = require("../libs/redisClient");
const { getCourses } = require("../services/Course");
class Index {
  async index(ctx, next) {
    // const sess = ctx.session;

    // if (!sess.uid) {
    //   sess.uid = 1;
    //   sess.username = "jsjiajia";
    //   sess.nickname = "js++";
    //   sess.gender = "male";
    // }

    // redisGet("txclass.sessTc-zI9xPivH15eh7MlB7jpx7LVvPJgNH").then((res) => {
    //   console.log(res);
    // });

    // ctx.body = {
    //   session: sess,
    // };

    //渲染页面
    await ctx.render("index");
  }

  async getCourseData(ctx, next) {
    const data = await getCourses();
    ctx.body = data;
  }
}

module.exports = new Index();
