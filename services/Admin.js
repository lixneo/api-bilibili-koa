const AdminModel = require("../db/models/admin");
class AdminService {
  async addAdmin(adminInfo) {
    const { username, password } = adminInfo;
    const result = await AdminModel.findOne({
      where: {
        username,
      },
    });
    if (result) {
      return await AdminModel.update(adminInfo, {
        where: {
          username,
        },
      });
    } else {
      return await AdminModel.create(adminInfo);
    }
  }
  async login(userInfo) {
    const { username, password } = userInfo;
    const usernameExist = await AdminModel.findOne({
      where: {
        username,
      },
    });
    if (!usernameExist) {
      return 1001;
    }

    const dbPassword = usernameExist.get("password");

    if (dbPassword !== password) {
      return 1002;
    }

    return {
      username: username,
      uid: usernameExist.get("id"),
    };
  }
}
module.exports = new AdminService();
