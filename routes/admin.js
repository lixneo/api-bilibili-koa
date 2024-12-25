const router = require("koa-router")(),
  adminController = require("../controllers/Admin");

router.get("/create_admin", adminController.createAdmin);
router.post("/login", adminController.LoginAction);
router.post("/logout", adminController.LogoutAction);
router.post("/login_check", adminController.LoginCheckAction);
router.post("/demodemo", adminController.demodemo);

module.exports = router;
