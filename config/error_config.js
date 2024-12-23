module.exports = {
  LOGIN: {
    USER_NOT_EXIST: {
      code: 1001,
      message: "用户不存在",
    },
    PASSWORD_ERROR: {
      code: 1002,
      message: "密码错误",
    },
    INVALID_USERNAME_LENGTH: {
      code: 1003,
      message: "用户名长度不合法",
    },
    INVALID_PASSWORD_LENGTH: {
      code: 1004,
      message: "密码长度不合法",
    },
    SUCCESS: {
      code: 1005,
      message: "登录成功",
    },
  },
  CREATE: {
    USER_EXIST: {
      code: 2001,
      message: "用户已存在",
    },
    INVALID_USERNAME_LENGTH: {
      code: 2002,
      message: "用户名长度不合法",
    },
    INVALID_PASSWORD_LENGTH: {
      code: 2003,
      message: "密码长度不合法",
    },
    SUCCESS: {
      code: 2004,
      message: "注册成功",
    },
    ERROR: {
      code: 2005,
      message: "注册失败",
    },
  },
};
