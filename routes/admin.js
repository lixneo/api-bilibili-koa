const router = require("koa-router")(),
  adminController = require("../controllers/Admin");

router.get("/create_admin", adminController.createAdmin);
router.post("/login", adminController.LoginAction);

module.exports = router;
