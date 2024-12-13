const cp = require("child_process"),
  { resolve } = require("path"),
  { nanoid } = require("nanoid"),
  Qiniu = require("qiniu");

module.exports = {
  startProcess(option) {
    const script = resolve(__dirname, option.path),
      child = cp.fork(script, []);

    let invoked = false;

    child.on("message", (data) => {
      option.message(data);
    });
    child.on("exit", (code) => {
      if (invoked) invoked = true;
      option.exit(code);
    });
    child.on("error", (err) => {
      if (invoked) invoked = true;
      option.error(err);
    });
  },
  qiniuUpload(options) {
    const mac = new Qiniu.auth.digest.Mac(options.ak, options.sk),
      conf = new Qiniu.conf.Config(),
      client = new Qiniu.rs.BucketManager(mac, conf),
      key = nanoid() + options.ext;
    return new Promise((resolve, rejects) => {
      client.fetch(options.url, options.bucket, key, (error, ret, info) => {
        if (error) {
          reject(error);
        } else {
          if (info.statusCode === 200) {
            resolve({ key });
          } else {
            reject(info);
          }
        }
      });
    });
  },
};
