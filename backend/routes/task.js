const router = require("express").Router();
const taskController = require('../controllers/task');
const { route } = require("./User");

router.post("/add/:userId", taskController.createtask);

router.get("/gettasklist", taskController.gettasks);
router.get("/gettasklist/:taskId", taskController.gettask);
router.put("/updatetask/:taskId", taskController.updatetask);
router.delete("/:taskId", taskController.deletetask);
router.patch("/:userId",taskController.taskpatch)

module.exports = router;
