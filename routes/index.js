const router = require("koa-router")(),
  indexController = require("../controllers/Index"),
  loginCheck = require("../middlewares/loginCheck");

router.get("/", indexController.index);
router.get("/get_courses", loginCheck, indexController.getCourseData);
router.post("/post_data_demo", loginCheck, indexController.postDataDemo);

module.exports = router;
