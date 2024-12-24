const { adminInfo } = require("../config/config"),
  { addAdmin, login } = require("../services/Admin"),
  { returnInf, trimSpace, makeCrypto } = require("../libs/utils"),
  { LOGIN, CREATE } = require("../config/error_config");
class Admin {
  async createAdmin(ctx, next) {
    adminInfo.password = makeCrypto(adminInfo.password);
    const result = await addAdmin(adminInfo);
    if (result) {
      ctx.body = returnInf(CREATE.SUCCESS);
    } else {
      ctx.body = returnInf(CREATE.ERROR);
    }
  }
  async LoginAction(ctx, next) {
    const { username, password } = ctx.request.body;
    // console.log({ username, password });
    console.log(ctx.request.body);

    if (!username || !password) {
      ctx.body = returnInf(LOGIN.INVALID_INPUT);
      return;
    }
    if (trimSpace(username) <= 0) {
      ctx.body = returnInf(LOGIN.INVALID_USERNAME_LENGTH);
      return;
    }
    if (trimSpace(password) <= 0) {
      ctx.body = returnInf(LOGIN.INVALID_PASSWORD_LENGTH);
      return;
    }
    const userInfo = {
      username: trimSpace(username),
      password: makeCrypto(trimSpace(password)),
    };

    const result = await login(userInfo);
    if (result === 1001) {
      ctx.body = returnInf(LOGIN.USER_NOT_EXIST);
      return;
    }

    if (result === 1002) {
      ctx.body = returnInf(LOGIN.PASSWORD_ERROR);
      return;
    }

    ctx.body = returnInf(LOGIN.SUCCESS, result);
  }
}

module.exports = new Admin();
