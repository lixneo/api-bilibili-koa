const router = require("koa-router")(),
  indexController = require("../controllers/Index");

router.get("/", indexController.index);
router.get("/get_courses", indexController.getCourseData);
router.get("/set_redis_data", indexController.setRedisData);
router.get("/get_redis_data", indexController.getRedisData);

module.exports = router;
