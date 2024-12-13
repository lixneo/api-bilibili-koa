const router = require("koa-router")(),
  crawlerController = require("../controllers/Crawler");

router.get("/crawler", crawlerController.crawlSlierData);

module.exports = router;
