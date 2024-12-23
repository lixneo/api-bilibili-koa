const { adminInfo } = require("../config/config"),
  { addAdmin } = require("../services/Admin"),
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
    if (trimSpace(username) <= 0) {
      ctx.body = returnInf(LOGIN.INVALID_USERNAME_LENGTH);
      return;
    }
    if (trimSpace(password) <= 0) {
      ctx.body = returnInf(LOGIN.INVALID_PASSWORD_LENGTH);
      return;
    }
  }
}

module.exports = new Admin();
