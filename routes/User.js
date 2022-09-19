const router = require("express").Router();
const userController = require('../controllers/User');

router.post("/adduser", userController.createuser);
router.get("/", userController.getusers);
router.get("/:userId", userController.getuser);
router.put("/updateuser/:userId", userController.userupdate);
router.delete("/deleteUser/:userId", userController.deleteuser);
router.post("/usts",userController.taskuser)
module.exports = router;
