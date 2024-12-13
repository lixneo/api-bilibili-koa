const seq = require("./connection/mysql_connect");

require("./models");

seq
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch((error) => {
    console.log("error:" + error);
  });

seq
  .sync({
    force: true,
  })
  .then(() => {
    console.log("the table has been sync");
    process.exit();
  });