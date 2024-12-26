const { returnInf } = require("../libs/utils"),
  { LOGIN } = require("../config/error_config");

module.exports = async (ctx, next) => {
  if (ctx.session.userInfo) {
    await next();
    return;
  }

  ctx.body = returnInf(LOGIN.LOGIN_STATUS_ERROR);
};
