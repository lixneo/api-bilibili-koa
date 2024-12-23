const cp = require("child_process"),
  { resolve } = require("path"),
  { nanoid } = require("nanoid"),
  Qiniu = require("qiniu"),
  { cryptoSecret } = require("../config/config"),
  crypto = require("crypto");

function startProcess(option) {
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
}

function qiniuUpload(options) {
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
}

function trimSpace(str) {
  return str.replace(/\s+/g, "");
}

function returnInf(errorInfo, data) {
  if (data) {
    errorInfo.data = data;
  }
  return errorInfo;
}

function makeCrypto(str) {
  const _md5 = crypto.createHash("md5"),
    content = `str=${str}&secret=${cryptoSecret}`;
  return _md5.update(content).digest("hex");
}
module.exports = {
  startProcess,
  qiniuUpload,
  trimSpace,
  returnInf,
  makeCrypto,
};
